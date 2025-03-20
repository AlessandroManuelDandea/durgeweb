// src/components/DevLogCard.js
import React from "react";

export default function DevLogCard({
  authorLogo,
  authorName,
  date,
  content,
  link,
  linkText,
  image,
}) {
  return (
    <div className="devlog-card">
      <div className="devlog-author flex items-center gap-4 mb-4">
        <img
          src={authorLogo}
          alt={authorName}
          className="devlog-author-logo w-16 h-16 rounded-full object-cover"
        />
        <div className="devlog-author-info">
          <span className="devlog-author-name block text-colors-goldBeige text-xl font-newrocker">
            {authorName}
          </span>
          <span className="devlog-date block text-colors-goldBeige text-sm">
            {date}
          </span>
        </div>
      </div>

      <div className="devlog-content text-colors-goldBeige">
        <p className="mb-2">{content}</p>

        {link && linkText && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-colors-redBright hover:text-colors-redDark underline"
          >
            {linkText}
          </a>
        )}

        {image && (
          <img
            src={image}
            alt="Dev Log"
            className="devlog-image w-full mt-4 rounded-md"
          />
        )}
      </div>
    </div>
  );
}
