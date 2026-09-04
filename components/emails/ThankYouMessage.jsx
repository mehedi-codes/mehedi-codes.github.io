import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import * as React from "react";

export const ThankYouMessage = ({name}) => {
  const previewText = "Thank you for reaching out to me!";
  return (
    <Html lang="en">
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Head />
        <Body className="flex flex-col items-center justify-center min-h-[597px] bg-black font-sans p-4">
          <Container className="max-w-2xl w-full bg-[#1B1C1C] rounded-lg shadow-md p-8">
            <Section className="mt-2">
              <Img
                src={"https://i.ibb.co/Lp2YMQf/me.png"}
                width="64"
                height="64"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-semibold text-center text-gray-300 mb-0 pt-0">
              Mehedi Hasan
            </Heading>
            <Text className="text-center text-sm pt-0 mt-0">
              <Link
                href="mailto:iammehedihasan@protonmail.com"
                className="text-gray-300 "
              >
                iammehedihasan@protonmail.com
              </Link>
            </Text>
            <Text className="text-center text-gray-400">
              Thank you so much <strong>{name.split(" ")[0]}</strong> for
              reaching out to me. I truly appreciate your interest and taking
              the time to contact with me. Your message means a lot to me and I
              will make sure to respond as soon as possible.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThankYouMessage;
