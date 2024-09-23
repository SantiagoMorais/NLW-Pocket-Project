export const deleteGoal = async (id: string) => {
  await fetch("http://localhost:3333/delete", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
  });
};
