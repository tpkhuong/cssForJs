import React from "react";
import styled from "styled-components";

import Button from "./Button";

var ButtonTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <tr>
        <th></th>
        <th>Fill</th>
        <th>Outline</th>
        <th>Ghost</th>
      </tr>
      <tr>
        <td>Small</td>
        <td>
          <Button size="small" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="small" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="small" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Medium</td>
        <td>
          <Button size="medium" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="medium" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="medium" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Large</td>
        <td>
          <Button size="Large" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="Large" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="Large" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
    </Table>
  );
};
