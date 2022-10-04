import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Paragraph() {
  return (
    <div>
      <p>
        <RoughNotationGroup show={true}>
          I have a passion for creating{" "}
          <RoughNotation type="box" color="blue" animate={true} animationDuration={2500}>
            user-friendly,
          </RoughNotation>{" "}
          simple and{" "}
          <RoughNotation className="dark:text-black" type="highlight" color="#f89f94" animate={true} animationDuration={2500}>
            delightful
          </RoughNotation>{" "}
          Web and Mobile{"  "}
          <RoughNotation className="dark:text-black" type="highlight" color="#ffd54f" animate={true} animationDuration={2500}>
            Applications.
          </RoughNotation>{" "}
          I have worked as a{" "}
          {/* <RoughNotation type="underline" color="#f33996" animate={true} animationDuration={1500}>
          Full-Stack Developer{" "}
        </RoughNotation> */}
          <RoughNotation className="dark:text-black" type="highlight" color="#9439f3" animate={true} animationDuration={2500}>
            Full-Stack
          </RoughNotation>{" "}
          developer for many different companies, from a venture capital backed{" "}
          <RoughNotation className="underline underline-offset-8" type="underline" color="#39f395" animate={true} animationDuration={2500}>
            <a href="https://www.rubato.no/">Startup Company </a>
          </RoughNotation>
          in Oslo, to providing my services to clients all over the globe on Upwork.{" "}
        </RoughNotationGroup>
      </p>
      <p className=" mt-10">
        <RoughNotationGroup show={true}>
          Currently, I'm focused on building{" "}
          <RoughNotation className="dark:text-black" show={true} type="highlight" color="#7d569a" animate={true} animationDuration={2500}>
            web
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation className="dark:text-black" show={true} type="highlight" color="#9a5694" animate={true} animationDuration={2500}>
            mobile
          </RoughNotation>{" "}
          apps from ground up, from creating{" "}
          <RoughNotation show={true} type="box" color="#f435a5" animate={true} animationDuration={2500}>
            UI designs
          </RoughNotation>{" "}
          to making a robust{" "}
          <RoughNotation show={true} type="underline" color="#c64142" animate={true} animationDuration={2500}>
            Backend
          </RoughNotation>{" "}
          with beautiful and{" "}
          <RoughNotation show={true} type="circle" color="#f435a5" animate={true} animationDuration={2500}>
            responsive
          </RoughNotation>{" "}
          <RoughNotation show={true} type="underline" color="#f435a5" animate={true} animationDuration={2500}>
            Frontend.
          </RoughNotation>
        </RoughNotationGroup>
      </p>
      {/* Donwload Button */}
      <div class="flex flex-row justify-center">
        <a
          href=""
          class="p-3 w-auto text-center text-white bg-indigo-500 shadow-sm shadow-indigo-500/50 rounded baseline hover:bg-indigo-700"
        >
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 inline-flex w-4 fill-white dark:fill-white" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
