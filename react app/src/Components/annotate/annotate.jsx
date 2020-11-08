import React, { useState, useEffect } from 'react';
import { ReactPictureAnnotation } from "react-picture-annotation";
import { useDispatch } from 'react-redux';
import {saveAnnotations} from '../../Actions/annotate-actions'
import './annotate.css'

const Annotate = () => {
    const [pageSize, setPageSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [img, setImage] = useState('');
    const [annotateData, setData] = useState([])
    const dispatch = useDispatch();
    const onResize = () => {
        setPageSize({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onSelect = selectedId => console.log(selectedId);
    const onChange = data => {
        console.log(data);
        setData(data)
    }
    const setUploadedImage = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const save = e => {
        e.preventDefault()
        console.log("Final Data", annotateData)
        let tag = {}
        let data = []
        if (annotateData.length) {
            annotateData.forEach(element => {
                tag['label'] = element.comment
                tag['height'] = element.mark.height
                tag['width'] = element.mark.width
                tag['(x1,y1)'] = [element.mark.x, element.mark.y]
                tag['(x3,y3)'] = [element.mark.x + element.mark.width, element.mark.y]
                tag['(x2,y2)'] = [element.mark.x + element.mark.width, element.mark.y + element.mark.height]
                tag['(x4,y4)'] = [element.mark.x, element.mark.y + element.mark.height]

                data.push(tag)
            })
        }
        dispatch(saveAnnotations(data))
        console.log("Data", data)
    }

    return (
        <>
            <div>
                <div className="button-container">
                <input type="file" accept="image/*" className="form-control-file mg-l" onChange={setUploadedImage}></input>
                <button type="submit" className="btn btn-success" onClick={save}>Save</button>
                </div>
                <ReactPictureAnnotation
                    image={img}
                    onSelect={onSelect}
                    onChange={onChange}
                    width={pageSize.width}
                    height={pageSize.height}
                />

            </div>
        </>
    );
};

export default Annotate;
