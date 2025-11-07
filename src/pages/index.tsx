import "@/app/globals.css";
import Menu from "@/components/menu";
import Metadata from "@/components/metadata";
import SquareBox from "@/components/squareBox";

const Projects = () => {
  return (
    <>
      <Metadata />
      <main>
        <div className="min-h-screen bg-stone-300">
          <Menu />
          <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">Accomplished</h2>
                <SquareBox
                  title={"Emoji Picker"}
                  description={
                    "Simple emoji picker for MACOS built with SwiftUI. Replacement for native solution. Click § -> Select emoji -> Paste Emoji whenever you want"
                  }
                  link={"https://github.com/TrueJacobG/emoji-picker"}
                />
                <SquareBox
                  title={"All in one Lombok"}
                  description={"The part of Java journey. Every Lombok related knowledge you might need"}
                  link={"https://github.com/TrueJacobG/all-in-one-lombok"}
                />
                <SquareBox
                  title={"All in One AssertJ"}
                  description={
                    "Java journey continues. This time I dived into AssertJ docs and I tried to find every interesting piece of knowledge in that testing framework"
                  }
                  link={"https://github.com/TrueJacobG/all-in-one-assertj"}
                />
                <SquareBox
                  title={"Quiz for Japanese Hiragana and Katakana studying"}
                  description={
                    "Additional resource for Anki. Test your Hiragana&Katakana knowledge with this simple tool. Go to: https://japanese-hiragana-katakana-quiz.vercel.app/"
                  }
                  link={"https://github.com/TrueJacobG/japanese-hiragana-katakana-quiz"}
                />
                <SquareBox
                  title={"Quiz application for Psychological Event"}
                  description={'Application for "Polskie Stowarzyszenie Studentów i Absolwentów Psychologii", Event located in Łódź, 2024'}
                  link={"https://github.com/TrueJacobG/pssiappka-2024"}
                />
                <SquareBox
                  title={"Emoji Splitter"}
                  description={
                    "Write some text, select an emoji and your message is ready to become a spam 😈. Go to: https://truejacobg.github.io/emoji-splitter/"
                  }
                  link={"https://github.com/TrueJacobG/emoji-splitter"}
                />
                <SquareBox
                  title={"Sudoku Solver"}
                  description={"Just another sudoku solver... but with GUI"}
                  link={"https://github.com/TrueJacobG/sudoku-solver"}
                />
                <SquareBox
                  title={"Test your python files in with mypy"}
                  description={"Old school testing library for testing input-outputs and type checking with mypy"}
                  link={"https://github.com/TrueJacobG/testing-tool"}
                />
                <SquareBox
                  title={"Game of Life"}
                  description={"Just another game of life implementation... but with GUI"}
                  link={"https://github.com/TrueJacobG/game-of-life"}
                />
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">Tech Demo (not finished but interesting)</h2>
                <SquareBox
                  title={"Java Spring Boot 3 - Auth Example"}
                  description={"Simple example of stateless token auth with Spring Boot 3 + Spring Security 6"}
                  link={"https://github.com/TrueJacobG/java-spring-boot-3-security-example"}
                />
                <SquareBox
                  title={"Spring as a Fullstack"}
                  description={
                    "React is fantastic ecosystem, but sometimes we just need simple frontend for our mostly backend project. So why won't we try to use Alpine.js and HTMX as a frontend part inside our Spring project"
                  }
                  link={"https://github.com/TrueJacobG/spring-as-fullstack"}
                />
                <SquareBox
                  title={"Quarkus as a Fullstack"}
                  description={
                    "Quarkus is cool and we all know that, but can we use it as a all-in-one solution (not just only for API handling but also for frontend part). This repo tries to validate that idea"
                  }
                  link={"https://github.com/TrueJacobG/quarkus-as-fullstack"}
                />
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">Accomplished but legacy</h2>
                <SquareBox
                  title={"Currency Hub"}
                  description={
                    "Application for one of the course at University of Lodz. Application can be used as a currency exchange with historical exchange rate tracker"
                  }
                  link={"https://github.com/TrueJacobG/currency-hub"}
                />
                <SquareBox
                  title={"Cash Split"}
                  description={
                    "Application for one of the course at University of Lodz. Are you planning to go for a trip with your friends and you are worried about expenses accounting? Don't worry, you just need to use Cash Split and problem will be gone. Track all of your expenses during the trip and split everything equally after"
                  }
                  link={"https://github.com/TrueJacobG/io-project"}
                />
                <SquareBox
                  title={"Text Game Engine"}
                  description={"Inspired by Otchlan. (Sort of) game engine for text games"}
                  link={"https://github.com/TrueJacobG/text-adventure-game-engine-old"}
                />
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">Open-source contributions</h2>
                <SquareBox
                  title={"Datafaker"}
                  description={"Fixed a couple of bugs related to 🇸🇪Swedish SSN generation and validation"}
                  link={"https://github.com/datafaker-net/datafaker"}
                />
                <SquareBox
                  title={"PrivateBin Java Api"}
                  description={"Small contribution to the private bin - API for Java"}
                  link={"https://github.com/InstantlyMoist/privatebin-java-api"}
                />
                <SquareBox
                  title={"Cucumber JVM"}
                  description={"Small contribution to the cucumber testing framework"}
                  link={"https://github.com/cucumber/cucumber-jvm"}
                />
                <SquareBox
                  title={"Fast Ruby"}
                  description={"Small contribution to the fast ruby repository"}
                  link={"https://github.com/fastruby/fast-ruby"}
                />
                <SquareBox
                  title={"AssertJ"}
                  description={"Small contribution to the assertJ/doc repository"}
                  link={"https://github.com/assertj/doc"}
                />
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">ADVENT OF CODE</h2>
                <SquareBox title={"AoC 2024"} description={""} link={"https://github.com/TrueJacobG/advent-of-code-2025"} />
                <SquareBox title={"AoC 2024"} description={""} link={"https://github.com/TrueJacobG/advent-of-code-2024"} />
                <SquareBox title={"AoC 2023"} description={""} link={"https://github.com/TrueJacobG/advent-of-code-2023"} />
                <SquareBox title={"AoC 2022"} description={""} link={"https://github.com/TrueJacobG/advent-of-code-2022"} />
                <SquareBox title={"AoC 2021"} description={""} link={"https://github.com/TrueJacobG/advent-of-code-2021"} />
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-6">The Big One</h2>
                <SquareBox
                  title={"The project that every programmer dreams to work on"}
                  description={
                    "I believe that all of us had that moment (perhaps after watching \"The Social Network\") in life that just made love coding... and not just coding another calculator or weather app (yeah, I've made a couple of those by myself 😅). I've meant to code something BIG. And I believe this is that project for me. The greatest source of knowledge for every fisherman in the WORLD (or just Poland, let's start down-to-earth)"
                  }
                  link={"https://github.com/TrueJacobG"}
                  /* BFA IS COMING */
                  linkText={"Work In Progress"}
                />
              </section>

              <div>...and a couple more you can find on my github 😄</div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
};

export default Projects;
