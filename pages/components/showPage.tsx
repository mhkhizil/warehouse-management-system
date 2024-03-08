'use client'
import React from "react";
export interface bodyType {
  body: { [key: string]: string | number | boolean }[]; 
  [key: string]: any; 
}
export interface ShowPageProps {
  headings: string[];
 body:bodyType[]
}
const ShowPage: React.FC<ShowPageProps> = ({ headings, body }) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
          {headings?.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
            </tr>
        </thead>
      
        <tbody>
          {body?.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
               {headings?.map((key, cellIndex) => (
                <td key={cellIndex}>{rowData[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowPage;
