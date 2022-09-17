import React from "react";
import {
  CommandsContainer,
  CommandsH1,
  CommandsWrapper,
  CommandsH2,
  CommandsP,
  CommandsCard
} from "./CommandsElement.js";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Commandsbot = () => {
  return (
    <CommandsContainer id="Commands">
      <CommandsH1 data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">All Commands of Jutebi Prefix: "/"</CommandsH1>
      <CommandsWrapper>
        <CommandsCard >
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/info</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Displays info about the currently playing song</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/pause</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Pauses the music</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/play song</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Loads a single song from url</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/play playlist</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Loads a playlist of songs from url</CommandsP>
        </CommandsCard>
        <CommandsCard >
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/play search</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Searches for song based on provided keywords</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/queue</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Stops the bot and clears the queue</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"> /resume</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Resume the music</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/shuffle</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Shuffles the queue</CommandsP>
        </CommandsCard>
        <CommandsCard >
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/skip</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Skips the current song</CommandsP>
          <CommandsH2 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">/skipto</CommandsH2>
          <CommandsP data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Skips to certain track #</CommandsP>
        </CommandsCard>
      </CommandsWrapper>
    </CommandsContainer>
  );
};

export default Commandsbot;
