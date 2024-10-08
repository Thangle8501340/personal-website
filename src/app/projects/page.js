"use client";
import React, { useState } from 'react';
import Layout from "../../components/Layout";
import CardComponent from '../../components/Card';
import chess from "../../../public/pictures/chess.png";
import code from "../../../public/pictures/code_challenge.jpg";
import person from '../../../public/pictures/personal.png';
import finance from '../../../public/pictures/finance.png';


export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <main className="flex min-h-screen text-white bg-black flex-col items-center justify-center"> 
      <Layout>
        <div className="flex flex-col items-center justify-center w-full py-12">
          <p className="text-center text-6xl uppercase">Personal Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> {/* 2x2 Grid container */}
            {[{
                title: "Chess Engine",
                description: "A project that takes in Magnus Carlsen gameplay in order to predict the next move using AI.",
                language: "Python, C++",
                imageUrl: chess,
                link: "https://github.com/Thangle8501340/Chess-Engine-C"
              },
              {
                title: "Coding Challenges",
                description: "All personal coding challenges that I have completed with their codes and explanations.",
                language: "Python",
                imageUrl: code,
                link: "https://github.com/Thangle8501340/Coding-Questions"
              },
              {
                title: "Personal Website",
                description: "A personal website that I created with React.js and Next.js",
                language: "React, Next.js, Javascript",
                imageUrl: person,
                link: "https://github.com/Thangle8501340/personal-website"
              },
              {
                title: "Personal Financial Assistant",
                description: "A project that allows users to keep track of all of their investments and plan for the future.",
                language: "Python, Golang, React, Next.js, Javascript",
                imageUrl: finance,
                link: "https://github.com/Frinvest"
              }
            ].map((project, index) => (
              <div key={index} className="flex justify-center"> 
                <CardComponent
                  title={project.title}
                  description={project.description}
                  language={project.language}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredIndex !== null && hoveredIndex !== index ? 'shrink' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </main>
  );
}
