import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  ErrorMessage,
  Input,
  InputFile,
  SuccessMessage,
} from "../../css/helpers";
import { setBeers } from "../beersList/beersSlice";
import Button from "../button/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Image = styled.img`
  max-height: 100px;
  height: 100%;
  width: auto;
`;

function AddBeer() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const createUrlFromFile = (file: File) => {
    return URL.createObjectURL(file);
  };

  // fake a request
  const request = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    request
      .then(() => {
        dispatch(
          setBeers([
            {
              id: Math.random().toString(),
              name: name,
              tagline: tagline,
              description: description,
              image_url: createUrlFromFile(image!),
            },
          ])
        );

        setSuccessMessage("Beer added successfully!");
        setErrorMessage("");
      })
      .catch(() => {
        setSuccessMessage("");
        setErrorMessage("Something went wrong!");
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        type="text"
        value={tagline}
        placeholder="Tagline"
        onChange={(event) => setTagline(event.target.value)}
      />

      <Input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <ImageSelect>
        <div>
          <InputFile
            type="file"
            onChange={(event) =>
              setImage((event.target as HTMLInputElement).files![0])
            }
          />
        </div>
        {image && (
          <Image src={createUrlFromFile(image)} height={100} alt="beer" />
        )}
      </ImageSelect>

      <Button type="submit" text="Add beer" />

      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!!successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Form>
  );
}

export default AddBeer;
