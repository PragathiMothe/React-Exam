import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DetailsList, DetailsListLayoutMode, IColumn, PrimaryButton } from '@fluentui/react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { MdEdit,MdDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import "./View.scss"

const View = () => {

    const [data, setData] = useState<any>();
    const navigation = useNavigate()
    const getData = async () => {
        try {
            const url = 'http://localhost:5000/data'
            const result: any = await axios.get(url);
            setData(result.data)
        } catch (err) {
            console.log(err);
        }
    };

    const deleteRequest = async (id: any) => {
        try {
            const url = `http://localhost:5000/data/${id}`;
            const result: any = await axios.delete(url);
            console.log(result);
            getData();
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getData();
    }, [])

  
    const columns: IColumn[] = [
        {
            key: 'column1',
            name: 'name',
            fieldName: 'name',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column2',
            name: 'rollnumber',
            fieldName: 'rollnumber',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column3',
            name: 'English',
            fieldName: 'English',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column4',
            name: 'Telugu',
            fieldName: 'Telugu',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column5',
            name: 'Hindi',
            fieldName: 'Hindi',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column6',
            name: 'Science',
            fieldName: 'Science',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column7',
            name: 'Social',
            fieldName: 'Social',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true
        },
        {
            key: 'column8',
            name: 'activites',
            fieldName: 'activites',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true
        },
        {
            key: 'column9',
            name: 'totalmarks',
            fieldName: 'totalmarks',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true
        },
        
        {
            key: 'column9',
            name: ' ',
            fieldName: 'id',
            minWidth: 200,
            maxWidth: 300,
            isResizable: true,
            onRender: (item: any) => (
                item.id &&
                <>
                    <Link className='btn' to={`/view/${item.id}`}><GrFormView size={20}/></Link>
                    <Link className='btn' to={`/update/${item.id}`}><MdEdit size={20}/></Link>
                    <Link className='btn' onClick={() => deleteRequest(item.id)} to=''><MdDelete size={20}/></Link>
                </>
            )
        },
    ];   

    return (
        <div className='Header'>
            <div className="Header_add">
                <PrimaryButton type='submit' onClick={()=>navigation('/create')} text='Add'/>
            </div>
        <div className='Header_table'>
            {data &&
                <DetailsList
                    items={data}
                    columns={columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                />}
        </div>
        </div>
    )
}

export default View