import { DisplayError } from "@/components/index";
//import {
//  RequestResetMutation,
//  RequestResetMutationVariables,
//} from "@/generated/RequestResetMutation";
//import { REQUEST_RESET_MUTATION } from "@/graphql/index";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Progress,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
}

export const RequestReset = () => {
/*  const toast = useToast();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
  const [requestReset, { loading, error }] = useMutation<
    RequestResetMutation,
    RequestResetMutationVariables
  >(REQUEST_RESET_MUTATION);

  const onSubmit = async (inputData: IFormData) => {
    try {
      const { data } = await requestReset({
        variables: {
          email: inputData.email,
        },
      });

      if (data?.sendUserPasswordResetLink) {
        toast({
          position: "top",
          title: "Password Reset Link sent!",
          description: "If the email exists, we've sent you an email.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
*/
  return (
    <Container>
      <Heading mb={4} as="h3">
        Request Password Reset
      </Heading>
      <form method="POST" >
        <Progress mb={4} colorScheme="facebook"/>
      </form>
    </Container>
  );
};
