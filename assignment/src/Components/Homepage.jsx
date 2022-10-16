import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import "./module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Heading,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(data);

  return (
    <>
      <div id="main">
        {data.map((ele) => {
          return (
            <div onClick={onOpen} id="sub" key={ele.id}>
              <img src={ele.thumbnail.small} />
              <div id="cont">
                <h3>{ele.title}</h3>
                <p>{ele.content}</p>
                <div id="m">
                  <p>
                    {ele.author.name}
                    <span> - {ele.author.role}</span>
                  </p>
                  <p>{ele.date}</p>
                </div>
              </div>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    <Image mt="40px" src={ele.thumbnail.large}></Image>
                    <Box padding="20px 0px">
                      <Heading mb="10px" as="h5" size="sm">
                        {ele.title}
                      </Heading>
                      <Text mb="20px" fontSize="xs">
                        {ele.content}
                      </Text>
                      <Flex>
                        <Image
                          src={ele.author.avatar}
                          width="60px"
                          borderRadius="50%"
                          height="60px"
                        ></Image>
                        <Text m="17px 0px 0px 10px">{ele.author.name}</Text>
                        <Text mt="17px"> - {ele.author.role}</Text>
                      </Flex>
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;

function BasicUsage() {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
    </>
  );
}
