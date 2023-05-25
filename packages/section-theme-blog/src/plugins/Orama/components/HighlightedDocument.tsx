import { Box } from "@mantine/core";
import type {
  Position,
  SearchResultWithHighlight,
} from "@orama/plugin-match-highlight";
import React from "react";

type HighlightedDocumentProps = {
  trim?: number;
  hit: SearchResultWithHighlight["hits"][0];
};

export function HighlightedDocument({
  hit,
  trim = 200,
}: HighlightedDocumentProps) {
  const getHighlightedText = (text: string, positions: Position[]) => {
    let highlightedText = "";
    let currentIndex = 0;

    positions.forEach((position) => {
      const start = position.start;
      const length = position.length;
      highlightedText +=
        text.slice(currentIndex, start) +
        '<span style={{fontSize:"16px"}}>' +
        text.substr(start, length) +
        "</span>";
      currentIndex = start + length;
    });

    highlightedText += text.slice(currentIndex);
    return highlightedText;
  };

  const trimContent = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    }
    return content;
  };

  const highlightDocument = () => {
    const highlightedDocument = { ...hit.document };

    for (const property in hit.positions) {
      if (hit.positions[property]) {
        const positionsArray = Object.values(hit.positions[property]).flat();
        highlightedDocument[property] = getHighlightedText(
          highlightedDocument[property] as string,
          positionsArray
        );
      }
    }

    highlightedDocument.content = trimContent(
      highlightedDocument.content as string,
      trim
    );

    return highlightedDocument;
  };

  const highlightedDocument = highlightDocument();

  return (
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: highlightedDocument.title as string,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: highlightedDocument.content as string,
        }}
      />
    </Box>
  );
}
