import Metadata from "@/components/metadata";
import PageShell from "@/components/pageShell";
import SectionHeader from "@/components/sectionHeader";
import SquareBox from "@/components/squareBox";
import Link from "next/link";

const aocYears = [
  { year: "2025", link: "https://github.com/TrueJacobG/advent-of-code-2025" },
  { year: "2024", link: "https://github.com/TrueJacobG/advent-of-code-2024" },
  { year: "2023", link: "https://github.com/TrueJacobG/advent-of-code-2023" },
  { year: "2022", link: "https://github.com/TrueJacobG/advent-of-code-2022" },
  { year: "2021", link: "https://github.com/TrueJacobG/advent-of-code-2021" },
];

const Projects = () => {
  return (
    <>
      <Metadata />
      <PageShell>
        <section className="text-center mb-20 animate-fade-up">
          <p className="text-emerald-400/80 text-sm font-mono tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From fullstack apps to open-source contributions — a collection of projects, experiments, and side quests in code.
          </p>
        </section>

        <div className="space-y-24">
          <section>
            <SectionHeader title="The Big Ones" subtitle="Ambitious projects I'm pouring my heart into" />
            <div className="grid gap-6">
              <SquareBox
                featured
                title="BFA"
                badge="Work In Progress"
                description="I believe that all of us had that moment (perhaps after watching &quot;The Social Network&quot;) in life that just made love coding... and not just coding another calculator or weather app (yeah, I've made a couple of those by myself 😅). I've meant to code something BIG. And I believe this is that project for me. The greatest source of knowledge for every fisherman in the WORLD (or just Poland, let's start down-to-earth)"
                link="https://bfa.boats"
                linkText="Visit Site"
              />
              <SquareBox
                featured
                title="Emoji Picker"
                description="Simple emoji picker for MACOS built with SwiftUI. Replacement for native solution. Click § → Select emoji → Paste Emoji whenever you want"
                link="https://emoji-picker.jakub.gradzewi.cz"
              />
            </div>
          </section>

          <section>
            <SectionHeader title="Accomplished" subtitle="Shipped and done — the greatest hits" />
            <div className="grid sm:grid-cols-2 gap-4">
              <SquareBox
                title="All in one Lombok"
                description="The part of Java journey. Every Lombok related knowledge you might need"
                link="https://github.com/TrueJacobG/all-in-one-lombok"
              />
              <SquareBox
                title="All in One AssertJ"
                description="Java journey continues. This time I dived into AssertJ docs and I tried to find every interesting piece of knowledge in that testing framework"
                link="https://github.com/TrueJacobG/all-in-one-assertj"
              />
              <SquareBox
                title="Quiz for Japanese Hiragana and Katakana studying"
                description="Additional resource for Anki. Test your Hiragana&Katakana knowledge with this simple tool."
                link="https://github.com/TrueJacobG/japanese-hiragana-katakana-quiz"
              />
              <SquareBox
                title="Quiz application for Psychological Event"
                description='Application for "Polskie Stowarzyszenie Studentów i Absolwentów Psychologii", Event located in Łódź, 2024'
                link="https://github.com/TrueJacobG/pssiappka-2024"
              />
              <SquareBox
                title="Emoji Splitter"
                description="Write some text, select an emoji and your message is ready to become a spam 😈"
                link="https://github.com/TrueJacobG/emoji-splitter"
              />
              <SquareBox
                title="Sudoku Solver"
                description="Just another sudoku solver... but with GUI"
                link="https://github.com/TrueJacobG/sudoku-solver"
              />
              <SquareBox
                title="Test your python files in with mypy"
                description="Old school testing library for testing input-outputs and type checking with mypy"
                link="https://github.com/TrueJacobG/testing-tool"
              />
              <SquareBox
                title="Game of Life"
                description="Just another game of life implementation... but with GUI"
                link="https://github.com/TrueJacobG/game-of-life"
              />
            </div>
          </section>

          <section>
            <SectionHeader title="Tech Demo" subtitle="Not finished, but interesting experiments" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <SquareBox
                title="Java Spring Boot 3 - Auth Example"
                description="Simple example of stateless token auth with Spring Boot 3 + Spring Security 6"
                link="https://github.com/TrueJacobG/java-spring-boot-3-security-example"
              />
              <SquareBox
                title="Spring as a Fullstack"
                description="React is fantastic, but sometimes we just need a simple frontend. Alpine.js and HTMX inside Spring."
                link="https://github.com/TrueJacobG/spring-as-fullstack"
              />
              <SquareBox
                title="Quarkus as a Fullstack"
                description="Can Quarkus be an all-in-one solution — API and frontend? This repo tries to validate that idea."
                link="https://github.com/TrueJacobG/quarkus-as-fullstack"
              />
            </div>
          </section>

          <section>
            <SectionHeader title="Accomplished but Legacy" subtitle="University projects and early experiments" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <SquareBox
                title="Currency Hub"
                description="Application for one of the courses at University of Lodz. Currency exchange with historical exchange rate tracker"
                link="https://github.com/TrueJacobG/currency-hub"
              />
              <SquareBox
                title="Cash Split"
                description="Track all expenses during a trip with friends and split everything equally after. University of Lodz project."
                link="https://github.com/TrueJacobG/io-project"
              />
              <SquareBox
                title="Text Game Engine"
                description="Inspired by Otchlan. (Sort of) game engine for text games"
                link="https://github.com/TrueJacobG/text-adventure-game-engine-old"
              />
            </div>
          </section>

          <section>
            <SectionHeader title="Open-source Contributions" subtitle="Giving back to the community" />
            <div className="grid sm:grid-cols-2 gap-4">
              <SquareBox
                title="Datafaker"
                description="Fixed a couple of bugs related to 🇸🇪 Swedish SSN generation and validation"
                link="https://github.com/datafaker-net/datafaker"
              />
              <SquareBox
                title="PrivateBin Java Api"
                description="Small contribution to the private bin - API for Java"
                link="https://github.com/InstantlyMoist/privatebin-java-api"
              />
              <SquareBox
                title="Cucumber JVM"
                description="Small contribution to the cucumber testing framework"
                link="https://github.com/cucumber/cucumber-jvm"
              />
              <SquareBox
                title="Fast Ruby"
                description="Small contribution to the fast ruby repository"
                link="https://github.com/fastruby/fast-ruby"
              />
              <SquareBox
                title="AssertJ"
                description="Small contribution to the assertJ/doc repository"
                link="https://github.com/assertj/doc"
              />
            </div>
          </section>

          <section>
            <SectionHeader title="Advent of Code" subtitle="Annual puzzle-solving ritual" />
            <div className="flex flex-wrap justify-center gap-3">
              {aocYears.map(({ year, link }) => (
                <Link
                  key={year}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-lg px-5 py-3 text-sm font-mono font-medium text-zinc-300 hover:text-emerald-400 min-w-[5rem] text-center"
                >
                  {year}
                </Link>
              ))}
            </div>
          </section>

          <p className="text-center text-zinc-500 text-sm pb-4">
            ...and a couple more you can find on{" "}
            <Link
              href="https://github.com/TrueJacobG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/80 hover:text-emerald-400 transition-colors"
            >
              my GitHub
            </Link>{" "}
            😄
          </p>
        </div>
      </PageShell>
    </>
  );
};

export default Projects;
