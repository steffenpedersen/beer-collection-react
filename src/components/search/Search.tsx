import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input } from "../../css/helpers";
import { getBeersAsync } from "../../redux/beersSlice";
import Button from "../button/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    flex-direction: row;
    gap: 50px;
  }
`;

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(getBeersAsync(search));
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button text={"Search"} type={"submit"} />
    </Form>
  );
}

export default Search;
