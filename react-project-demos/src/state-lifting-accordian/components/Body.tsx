import Title from "./Title";
import Description from "./Description";
import Button from "./Button";
import { useState } from "react";

const Body = () => {
  const [accordianNumber, setAccordianNumber] = useState<number>(0);

  return (
    <div className="w-[50%] mt-10 mb-10">
      <h1 className="text-center text-3xl mb-5 font-bold">
        Accordian State Lift Example
      </h1>
      <div className="border-2 p-3">
        <Title>
          <h1 className="font-medium">Robert Downy Jr</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={0}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 0 ? `block` : `hidden`}`}>
            Robert Downey Jr. is a highly successful and versatile American
            actor, producer, and musician, best known for his portrayal of Tony
            Stark/Iron Man in the Marvel Cinematic Universe. He has earned
            critical acclaim for his diverse range of roles and has been
            nominated for multiple Academy Awards and Golden Globe awards.
          </p>
        </Description>
      </div>
      <div className="border-b-2 border-l-2 border-r-2 p-3">
        <Title>
          <h1 className="font-medium">Chris Hemsworth</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={1}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 1 ? `block` : `hidden`}`}>
            Christopher Hemsworth AM is an Australian actor. Born and raised in
            Melbourne, Victoria, and Bulman, Northern Territory, he rose to
            prominence playing Kim Hyde in the Australian television series Home
            and Away before beginning a film career in Hollywood.
          </p>
        </Description>
      </div>
      <div className="border-b-2 border-l-2 border-r-2 p-3">
        <Title>
          <h1 className="font-medium">Chris Evans</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={2}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 2 ? `block` : `hidden`}`}>
            Chris Evans is an American actor, director, and producer, best known
            for his role as Captain America in the Marvel Cinematic Universe. He
            was born in Boston, Massachusetts, on June 13, 1981. Evans' acting
            career began with school productions and community theater, and he
            later studied at the Lee Strasberg Theatre and Film Institute.
          </p>
        </Description>
      </div>
      <div className="border-b-2 border-l-2 border-r-2 p-3">
        <Title>
          <h1 className="font-medium">Scarlett Johanson</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={3}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 3 ? `block` : `hidden`}`}>
            Scarlett Ingrid Johansson (/dʒoʊˈhænsən/; born November 22, 1984) is
            an American actress and singer. She is known for her roles in "Lost
            in Translation" and the Marvel Cinematic Universe as Natasha
            Romanoff/Black Widow. Johansson is also a highly successful box
            office star, with her films earning over $14.3 billion worldwide.
          </p>
        </Description>
      </div>
      <div className="border-b-2 border-l-2 border-r-2 p-3">
        <Title>
          <h1 className="font-medium">Jeremy Rener</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={4}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 4 ? `block` : `hidden`}`}>
            Jeremy Renner is an American actor and singer, known for his
            versatile roles in both independent and blockbuster films. He is
            recognized for playing Hawkeye in the Marvel Cinematic Universe, and
            for his performances in "The Hurt Locker" and "The Town," for which
            he received Academy Award nominations. Beyond acting, Renner is also
            a skilled musician, playing guitar, keyboard, and drums, according
            to bookmyshow.com. More details about Jeremy Renner: Early Career:
            Renner began his career in independent films like "Dahmer" and "Neo
            Ned".
          </p>
        </Description>
      </div>
      <div className="border-b-2 border-l-2 border-r-2 p-3">
        <Title>
          <h1 className="font-medium">Mark Ruffalo</h1>
        </Title>
        <Button
          accordianNumber={accordianNumber}
          indexNumber={6}
          setAccordianNumber={setAccordianNumber}
        />
        <Description>
          <p className={`${accordianNumber === 6 ? `block` : `hidden`}`}>
            Mark Ruffalo is an American actor, activist, and filmmaker, known
            for his versatile roles in film and television. He gained
            recognition for his portrayal of Bruce Banner/Hulk in the Marvel
            Cinematic Universe. He has been a three-time Academy Award nominee
            and has appeared in over 50 films.
          </p>
        </Description>
      </div>
    </div>
  );
};

export default Body;
