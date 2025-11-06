"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GuckGuckHighscore = () => {
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    setScores(
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000))
    );
  }, []);

  return (
    <div
      className="relative min-h-screen text-center text-blue-200 bg-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <main className="relative z-10 flex flex-col items-center justify-center space-y-32 py-32 px-6">
        {/* Titel */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-16"
        >
          Guck-Guck Highscore Liste
        </motion.h1>

        {/* Textbereich */}
        <section className="max-w-3xl text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae eros eget sapien ultricies tempus. Donec a arcu eget orci
            dignissim viverra. Suspendisse potenti. Praesent commodo nisl in
            ante consectetur, ac ultrices ligula elementum.
          </p>
        </section>

        {/* Bildbereich */}
        <section>
          <img
            src="/placeholder.png"
            alt="Beispielbild"
            className="rounded-2xl shadow-lg mx-auto"
          />
        </section>

        {/* Tabelle 1 */}
        <section className="overflow-x-auto">
          <table className="min-w-[600px] bg-blue-950 bg-opacity-50 border border-blue-800 rounded-2xl shadow-md">
            <thead>
              <tr className="bg-blue-900 bg-opacity-70">
                <th className="px-6 py-3">Platz</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Punkte</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-t border-blue-800">
                  <td className="px-6 py-3">{i + 1}</td>
                  <td className="px-6 py-3">Lorem Ipsum</td>
                  <td className="px-6 py-3">{scores[i] ?? "..."}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Zwei Tabellen hintereinander */}
        <section className="flex flex-col md:flex-row gap-8 justify-center">
          {[1, 2].map((n) => (
            <table
              key={n}
              className="min-w-[300px] bg-blue-950 bg-opacity-50 border border-blue-800 rounded-2xl shadow-md"
            >
              <thead>
                <tr className="bg-blue-900 bg-opacity-70">
                  <th className="px-4 py-2">Spalte A</th>
                  <th className="px-4 py-2">Spalte B</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i} className="border-t border-blue-800">
                    <td className="px-4 py-2">Lorem</td>
                    <td className="px-4 py-2">Ipsum</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </section>

        {/* Letzter Textbereich */}
        <section className="max-w-3xl text-lg leading-relaxed">
          <p>
            Curabitur ullamcorper, ligula ut tempor ultrices, ex purus convallis
            massa, ac malesuada metus felis nec lacus. Duis non nisl ut ante
            tempor porta. Vivamus sodales sapien sit amet massa iaculis, id
            sagittis ex rhoncus.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GuckGuckHighscore;
