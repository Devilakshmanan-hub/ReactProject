import React from 'react';
import { useUser } from './DataContext';
import Header from './Header';

const HeaderRenderer = () => {
  // Destructure required data from context
  const {
    depts,
    isLoading,
    fetchError,
    Search,
    handleChanges,
    handleDelete,
  } = useUser();

  // Show loading or error messages
  if (isLoading) return <p>Loading Items...</p>;
  if (fetchError) return <p>Error: {fetchError}</p>;

  // Filter departments based on search input
  const filteredDepts = depts?.filter(dept =>
    dept.dept?.toLowerCase().includes(Search?.toLowerCase() || '')
  );

  return (
    <Header
      title="React Js Todo List"
      depts={filteredDepts}
      handleChanges={handleChanges}
      handleDelete={handleDelete}
    />
  );
};

export default HeaderRenderer;
