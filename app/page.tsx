import Image from "next/image";
import "./globals.css";
import { request } from "http";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";

import mainPage from './public/texts/mainPage.json'
import oskarCafeLogo from './public/logo-oskar.png'

type StringArray = {
  Json: any;
  JsonName: string;
};

function ArrayToText(array: any[], arrayParent: any[])
{
  let returnValue: any[] = []
  let hasList: boolean = false;
  returnValue = array.map(value => {
    let returnValue: any[] = []
    if(value.substring(0,1) == "\\" && value.substring(value.length-1) == "\\")
    {
      hasList = true;
      returnValue = [
        <ul style={{textAlign: "center", marginBottom: "1.5vh"}}>{arrayParent[value.substring(1, value.length-1)].map((arrayParentValue: string) => [<li>{arrayParentValue}</li>])}</ul>
      ]
    }
    else
    {
      returnValue = [
        <p style={{textAlign: "center", marginBottom: "1vh"}}>{value}</p>
      ]
    }
    return returnValue
  })
  //console.log("return: "+returnValue)
  return (
    returnValue
  )
}
interface sectionInfo {
  "name": string,
  "id": number,
  "text": string[],
  "array"?: any[]
}
interface sectionProb {
  section: sectionInfo
}
function Section({section}:sectionProb/*props: sectionProb/*section: { name: string; id: number; text: string[]; }[]*/)
{
  //let section = mainPage.section.BilletOgBord;
  //let section = props.section;
  //console.log(section)
  let textSection: any[] = []
  
  //console.log(section)

  let i: number = 0
  //for (let thing in section) {
    textSection[i] = section
    let stringAr: String[]
    i++;
  //}

  const textContent: JSX.Element[][] = textSection.map((singleContent) => {
    let result = [<li key={singleContent.id * 2} style={{fontSize: 24, textAlign: "center"}}><h3>{singleContent.name}</h3></li>]
    let addition: JSX.Element[] = []
    addition = [<li key={singleContent.id * 2}>{ArrayToText(singleContent.text, singleContent)}</li>]
    /*singleContent.text.forEach((element: string) => {
      if(element.substring(0,1) == "\\" && element.substring(element.length-1) == "\\")
      {
        console.log(element.substring(0,1) + element.substring(element.length-1))
        addition = addition.concat([
          <li key={singleContent.id * 2 + 1}>
            { ArrayToText(singleContent.text, {id: singleContent.id, name: singleContent.name, text: singleContent.text, array: [singleContent[element.substring(2, element.length-3)]] }) }
          </li>
        ])
      }
      else
      {
        addition = addition.concat([
          <li key={singleContent.id * 2 + 1}>
            { ArrayToText(singleContent.text, {id: singleContent.id, name: singleContent.name, text: singleContent.text }) }
          </li> ])
        console.log("normal-adding: "+addition[addition.length])
      }
    });*/
    
    result = result.concat(addition)
    return result
  });
  for(let kes in textContent)
  {
    //console.log(textContent[kes])
    //console.log(textContent[kes][1].props)
  }
  //console.log(textContent)
  return (
    <ul className="Flexbox" style={{width: "55vw"}}>
      {textContent}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="Flexbox" style={{paddingTop: '50px', justifyContent: "center"}}>
      <h1>
        <Image
          src={oskarCafeLogo}
          width={1000}
          height={760}
          className="hidden md:block"
          alt="idk tetst"
        />
      </h1>
      <div style={{textWrap: "balance"}}>
        <div style={{marginBottom: "4vh"}}>
          <Section section={mainPage.section.omOskarCafe[0]} />
        </div>
        <div>
          <Section section={mainPage.section.BilletOgBord[0]}/>
          <Section section={mainPage.section.BilletOgBord[1]}/>
          <Section section={mainPage.section.omOskarCafe[2]}/>
        </div>
        <div>
          <Section section={mainPage.section.omOskarCafe[1]}/>
        </div>
      </div>
    </div>
  );
}
