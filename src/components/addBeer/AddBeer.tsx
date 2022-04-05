import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input, InputFile } from "../../css/helpers";
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

  const createUrlFromFile = (file: File) => {
    return URL.createObjectURL(file);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(
      setBeers([
        {
          id: 1,
          name: name,
          tagline: tagline,
          description: description,
          image_url: createUrlFromFile(image!),
        },
      ])
    );
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
    </Form>
  );
}

export default AddBeer;
