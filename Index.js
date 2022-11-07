
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
let dom
let container

describe('index.html', () => {
  beforeEach(() => {

    function btnChanger(){
      let x_bg = Math.floor(Math.random() * 256);
      let y_bg = Math.floor(Math.random() * 256);
      let z_bg = Math.floor(Math.random() * 256);
      let x_btnColor = Math.floor(Math.random() * 256);
      let y_btnColor = Math.floor(Math.random() * 256);
      let z_btnColor = Math.floor(Math.random() * 256);
      
      bgColor = `rgb(${x_bg}, ${y_bg}, ${z_bg})`;
      console.log(bgColor);
      btnColor = "rgb(" + x_btnColor + "," + y_btnColor + "," + z_btnColor + ")";
      console.log(btnColor);
  
      let btn_change_bg = document.querySelector('.changeBG');
      let changeBG = btn_change_bg.style.background = bgColor;
  
      let x = document.getElementById("btn-color").style.background = btnColor;
  
      let btn_text_colors = ["black", "white"];
      let random = Math.floor(Math.random() * btn_text_colors.length);
      let y = document.getElementById("btn-color").style.color = btn_text_colors[random];
  
  }

    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders just one h1 element', () => {
    expect(container.querySelectorAll('h1').length).toBe(1)
  })

  it('check the main tag', () => {
    expect(container.querySelector('main').parentElement.tagName).toBe("BODY")
  })

  it('renders a header element', () => {
    expect(container.querySelector('header')).not.toBeNull()
  })

  it('renders a nav element', () => {
    expect(container.querySelector('nav')).not.toBeNull()
  })

  it('renders a h1 element inside the header tag', () => {
    expect(container.querySelector('header').contains(container.querySelector('h1'))).toBeTruthy()
  })

  it('renders a nav element inside the header tag', () => {
    expect(container.querySelector('header').contains(container.querySelector('nav'))).toBeTruthy()
  })

  it('renders a footer element', () => {
    expect(container.querySelector('footer')).not.toBeNull()
  })

  it('check a footer element class', () => {
    expect(container.querySelector('footer').className).toBe('footer-section')
  })

  it('check the mujeres section tag and id', () => {
    expect(container.querySelector('#news').tagName).toBe("SECTION")
  })

  it('check the ninos section tag and id', () => {
    expect(container.querySelector('#team').tagName).toBe("SECTION")
  })

  it('check the hombres section tag and id', () => {
    expect(container.querySelector('#services').tagName).toBe("SECTION")
  })

  it('check a mujeres section class', () => {
    expect(container.querySelector('#news').className).toBe('mujeres-section')
  })

  it('check a ninos section class', () => {
    expect(container.querySelector('#team').className).toBe('ninos-section')
  })

  it('check a hombres section class', () => {
    expect(container.querySelector('#services').className).toBe('hombres-section')
  })

})