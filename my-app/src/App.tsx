import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import StudentForm from './Form/StudentForm';
import Header from './Header';
import View from './View/View';
import ViewIteam from './ViewItems/Index' 

function app() {
  return (
    <>
     {/* <Form/>  */}
    <BrowserRouter>
    <Header/>
        <div className="navigation">
          <Link className='btn' to="view">View</Link>
          <Link className='btn' to="create">create</Link>
        </div>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/view" element={<View />} />
          <Route path="/view/:id" element={<ViewIteam />} />
          <Route path="/create" element={<StudentForm/>} />
          <Route path="/update/:id" element={<StudentForm/>} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default app;
