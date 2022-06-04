import React from "react";
import {
  CommandsContainer,
  CommandsH1,
  CommandsWrapper,
  CommandsH2,
  CommandsP,
  CommandsCard
} from "./CommandsElement.js";

const Commandsbot = () => {
  return (
    <CommandsContainer id="Commands">
      <CommandsH1>All Commands of Jutebi Prefix: "/"</CommandsH1>
      <CommandsWrapper>
        <CommandsCard>
          <CommandsH2>/info</CommandsH2>
          <CommandsP>Displays info about the currently playing song</CommandsP>
          <CommandsH2>/pause</CommandsH2>
          <CommandsP>Pauses the music</CommandsP>
          <CommandsH2>/play song</CommandsH2>
          <CommandsP>Loads a single song from url</CommandsP>
          <CommandsH2>/play playlist</CommandsH2>
          <CommandsP>Loads a playlist of songs from url</CommandsP>
        </CommandsCard>
        <CommandsCard>
          <CommandsH2>/play search</CommandsH2>
          <CommandsP>Searches for song based on provided keywords</CommandsP>
          <CommandsH2>/queue</CommandsH2>
          <CommandsP>Stops the bot and clears the queue</CommandsP>
          <CommandsH2>/resume</CommandsH2>
          <CommandsP>Resume the music</CommandsP>
          <CommandsH2>/shuffle</CommandsH2>
          <CommandsP>Shuffles the queue</CommandsP>
        </CommandsCard>
        <CommandsCard>
          <CommandsH2>/skip</CommandsH2>
          <CommandsP>Skips the current song</CommandsP>
          <CommandsH2>/skipto</CommandsH2>
          <CommandsP>Skips to certain track #</CommandsP>
        </CommandsCard>
      </CommandsWrapper>
    </CommandsContainer>
  );
};

export default Commandsbot;
