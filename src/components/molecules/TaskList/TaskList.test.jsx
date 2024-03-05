import { render, screen, expect } from "@testing-library/react";
import { describe, it } from "vitest";
import TaskList from "./TaskList.jsx";

describe("TaskList", () => {
  it("renders task list ", () => {
    render(
      <TaskList
        data-testid='task-list'
        tasks={[{ id: 1, title: "task title" }]}
      />
    );
    const element = screen.getByText("task title");
    expect(element).toBeInTheDocument();
  });
});
