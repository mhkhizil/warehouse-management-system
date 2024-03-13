"use client";
import React from "react";
export interface bodyType {
  body: { [key: string]: string | number | boolean }[];
  [key: string]: any;
}
export interface ShowPageProps {
  headings: string[];
  body: bodyType[];
  deleteHandler: (targetItemId: string) => void;
}
const ShowPage: React.FC<ShowPageProps> = ({
  headings,
  body,
  deleteHandler,
}) => {
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
          {body?.map((rowData, rowIndex) =>{ 
         
            
            return (
            <tr key={rowIndex}>
              {headings?.map((key, cellIndex) => (
                <td key={cellIndex}>{rowData[key]}</td>
              ))}
           <td>
           <button onClick={()=>deleteHandler(rowData?.id)}>delete </button>
           </td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default ShowPage;
