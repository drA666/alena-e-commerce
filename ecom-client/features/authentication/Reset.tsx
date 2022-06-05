import { DisplayError } from "@/components/index";
//import { ResetMutation, ResetMutationVariables } from "@/generated/ResetMutation";
//import { RESET_MUTATION } from "@/graphql/index";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
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
  password: string;
  token: string;
}

interface IResetProps {
  token: string;
}

export const Reset = ({ token }: IResetProps) => {
  const router = useRouter();
  const toast = useToast();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
//  const [reset, { data, loading, error }] = useMutation<ResetMutation, ResetMutationVariables>(
//    RESET_MUTATION
//  );

  const resetError = //data?.redeemUserPasswordResetToken?.code
    //? data?.redeemUserPasswordResetToken
    //: 
	undefined;
/*
  const onSubmit = async (inputData: IFormData) => {
    try {
      const { data } = await reset({
        variables: {
          email: inputData.email,
          password: inputData.password,
          token,
        },
      });

      // A null response signals a successful response
      if (!data?.redeemUserPasswordResetToken) {
        toast({
          position: "top",
          title: "Success!",
          description: "You can now sign in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/signin");
      }
    } catch (err) {
      console.error(err);
    }
  };
*/
  return (
    <Container>
      <Heading mb={4} as="h3">
        Reset Email
      </Heading>
      <form method="POST" >
      </form>
    </Container>
  );
};
