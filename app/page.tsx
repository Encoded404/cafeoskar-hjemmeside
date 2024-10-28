import Image from "next/image";
import "./globals.css";
import { request } from "http";
import { ReactElement } from "react";

let mainPage = require("./public/mainPage.json")

type StringArray = {
  Json: any;
  JsonName: string;
};

function ArrayToText(array: any[])
{
  const returnValue: any[] = array.map(value => [
    <p style={{textAlign: "center"}}>{value}</p>
  ])

  return (
    returnValue
  )
}

function Section()
{
  let section = mainPage.section.BilletOgBord;
  //console.log(section)
  let textSection: any[] = []

  let i: number = 0
  for (let key in section) {
    textSection[i] = section[key]
    let stringAr: String[]
    //textSection["text"].forEach(element => {
    //  
    //});
    //console.log(textSection[i])
    i++;
  }
  
  const textContent: any[] = textSection.map(singleContent => [
    <li key={singleContent.id} style={{fontSize: 24, textAlign: "center"}}>{singleContent.name}</li>,
    <li key={singleContent.id}>
      { ArrayToText(singleContent.text) }
    </li>
  ]);
  for(let kes in textContent)
  {
    //console.log(textContent[kes])
    console.log(textContent[kes][1].props)
  }
  //console.log(textContent)
  return (
    <div>
      <ul>
        {textContent}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="Flexbox" style={{paddingTop: '50px', justifyContent: "center"}}>
      <Image
        src="/logo-oskar.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="idk tetst"
      />
      <div>
        <Section/>
      </div>
    </div>
  );
}
