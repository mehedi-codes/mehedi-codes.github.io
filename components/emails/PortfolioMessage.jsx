import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import * as React from "react";

export const PortfolioMessage = ({name, email, message}) => {
  const previewText = "New message from your portfolio website!";
  return (
    <Html lang="en">
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Head />
        <Body className="flex flex-col items-center justify-center min-h-[597px] bg-black font-sans p-4">
          <Container className="max-w-2xl w-full bg-[#1B1C1C] rounded-lg shadow-md p-8">
            <Heading className="text-2xl font-semibold text-center text-gray-300 mb-0 pt-0">
              {name}
            </Heading>
            <Text className="text-center text-sm pt-0 mt-0">
              <Link href={`mailto:${email}`} className="text-gray-300 ">
                {email}
              </Link>
            </Text>
            <Text className="text-center text-gray-400">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PortfolioMessage;
