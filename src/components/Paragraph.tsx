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
          <RoughNotation className="dark:text-black" show={true} type="highlight" color="#8cff32" animate={true} animationDuration={2500}>
            web
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation className="dark:text-black" show={true} type="highlight" color="#fdff32" animate={true} animationDuration={2500}>
            mobile
          </RoughNotation>{" "}
          apps from ground up, from creating{" "}
          <RoughNotation show={true} type="box" color="#9439f3" animate={true} animationDuration={2500}>
            UI designs
          </RoughNotation>{" "}
          to making a robust{" "}
          <RoughNotation show={true} type="underline" color="#ffd54f" animate={true} animationDuration={2500}>
            Backend
          </RoughNotation>{" "}
          with beautiful and{" "}
          <RoughNotation show={true} type="circle" color="#f435a5" animate={true} animationDuration={2500}>
            responsive
          </RoughNotation>{" "}
          <RoughNotation show={true} type="highlight" color="#f435a5" animate={true} animationDuration={2500}>
            Frontend.
          </RoughNotation>
        </RoughNotationGroup>
      </p>
    </div>
  );
}
