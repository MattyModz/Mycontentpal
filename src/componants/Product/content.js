import Container from "../container";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export default function Content() {
  return (
    <>
      <div className="bg-body-dark p-8 mb-8">
        <div className="border-2 rounded-xl p-4 -mt-8  bg-white text-black">
          <Container>
            Money Content
            <br />
            <br />
            <h1>Article title</h1>
            <p className="font-interr mt-8 ">
              Picture the moment: you’ve handed your client their content.
              You’ve hit the brief, sounded convincing, and returned a piece of
              content you can truly be proud of –
              <br />
              <br />
              <RoughNotation type="box" className="  " show={true}>
                Mistakes
              </RoughNotation>{" "}
              can be made and errors enacted – and often this can go unnoticed.
              Whilst it may not seem like a big deal at the moment, nobody wants
              to return a piece to a client if it’s teeming with typos. That’s
              exactly the kind of thing we avoid at My Content Pal. In this
              post, we’re going to give a whistle-stop tour of how we achieve
              stellar quality analysis. This includes: Our content grade book
              and grading system Writer feedback and advice Structured teams and
              editorial roles Time and time again, our content has all the right
              stuff, with none of the boring
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
