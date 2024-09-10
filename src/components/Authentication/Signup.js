import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profilePic, setProfilePic] = useState();

  const handleClick = () => setShow(!show) 
  const postDetails = (pis)=>{}
  const submitHandler = () => {}

  return (
    <>
      <VStack spacing={"5px"}>
        <FormControl id="username" isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            placeholder="Enter your name."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="Enter your email."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="Password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
            type={show ? "text" : "password"}
              placeholder="Enter your Password."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width={"4.5rem"}>
              <Button h="1.75rem" size={"sm"} onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="ConfirmPassword" isRequired>
          <FormLabel>Comfirm Password</FormLabel>
          <InputGroup>
            <Input
            type={show ? "text" : "password"}
              placeholder="Re-enter your Password."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width={"4.5rem"}>
              <Button h="1.75rem" size={"sm"} onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="Profile">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
          type="file"
          p={1.5}
          accept="image/*"
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          />
        </FormControl>
        <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        >
            Sign Up
        </Button>
      </VStack>
    </>
  );
};

export default SignUp;
