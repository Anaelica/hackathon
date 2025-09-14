"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, title: "Content designers", subtitle: "3 open" },
  { id: 2, title: "PHP Developers", subtitle: "2 open" },
  { id: 3, title: "UI/UX Designer", subtitle: "5 open" },
  { id: 4, title: "iOS Developer", subtitle: "1 open" },
  { id: 5, title: "Android Developer", subtitle: "4 open" },
  { id: 6, title: "Backend Developer", subtitle: "2 open" },
  { id: 7, title: "Android Developer", subtitle: "4 open" },
  { id: 8, title: "Backend Developer", subtitle: "2 open" },
  { id: 9, title: "Android Developer", subtitle: "4 open" },
  { id: 10, title: "Backend Developer", subtitle: "2 open" },
];

export default function HireCards() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrev = () => {
    if (page > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    }
  };

  const visibleCards = cards.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium">You Need to hire</h3>
        <div className="flex items-center gap-2">
          {page > 0 && (
            <button
              onClick={handlePrev}
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <button className="text-sm text-indigo-600">View All</button>
          {page < totalPages - 1 && (
            <button
              onClick={handleNext}
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {visibleCards.map((c) => (
          <div
            key={c.id}
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-start gap-2 transform transition-all duration-300 ${
              animating ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <div className="w-9 h-9 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
              {c.title.charAt(0)}
            </div>
            <div className="text-sm font-medium">{c.title}</div>
            <div className="text-xs text-gray-400">{c.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
