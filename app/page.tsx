import Image from "next/image";
import "./globals.css";

import mainPage from './public/texts/mainPage.json'
import oskarCafeLogo from './public/logo-oskar.png'


function ArrayToText(array: string[], arrayParent: sectionInfo)
{
  let i: number = 0
  let i2: number = 0
  let returnValue: JSX.Element[][] = []
  returnValue = array.map((value: string) => {
    let returnValue: JSX.Element[] = []
    if(value.substring(0,1) == "\\" && value.substring(value.length-1) == "\\")
    {
      returnValue = [
        <ul key={i} style={{textAlign: "center", marginBottom: "1.5vh"}}>{arrayParent.list1?.map((arrayParentValue: string) => {return [<li key={i2}>{arrayParentValue}</li>]; i2++})}</ul>
      ]
      i++;
    }
    else
    {
      returnValue = [
        <p key={0} style={{textAlign: "center", marginBottom: "1vh"}}>{value}</p>
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
  "list0"?: string[],
  "list1"?: string[],
  "list2"?: string[],
  "name": string,
  "id": number,
  "text": string[]
}
interface sectionProb {
  section: sectionInfo
}
function Section({section}:sectionProb/*props: sectionProb/*section: { name: string; id: number; text: string[]; }[]*/)
{
  //let section = mainPage.section.BilletOgBord;
  //let section = props.section;
  //console.log(section)
  const textSection: sectionInfo[] = []
  
  //console.log(section)

  //let i: StringValues = section
  //for (let thing in section) {
    textSection[0] = section
  //}

  const textContent: JSX.Element[][] = textSection.map((singleContent) => {
    let result = [<li key={singleContent.id * 2} style={{fontSize: 24, textAlign: "center"}}><h3>{singleContent.name}</h3></li>]
    let addition: JSX.Element[] = []
    addition = [<li key={singleContent.id * 2 + 1}>{ArrayToText(singleContent.text, singleContent)}</li>]
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
