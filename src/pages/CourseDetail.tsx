import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../db";
import { useEffect, useState } from "react";
import type { Cource } from "../interfaces/cource.interface";

const CourseDetail = () => {
  const navigate = useNavigate()
  const {courceId} = useParams()
  const [courceDetail, setCourceDetail] = useState<Cource | null>(null)


  useEffect(() => {
    // Tìm kiếm khóa học theo id
  const findCourceById = courses.find(cource=> {
      return cource.id === +(courceId || 0)
    })
    
    if (findCourceById) {
      setCourceDetail(findCourceById)
    }

  }, [courceId])


  return (
    <>
      <Navbar />
      <main className="container">
        <h1>{courceDetail?.title}</h1>
        <p>{courceDetail?.description}</p>
        <span className="topic-badge">{courceDetail?.topic}</span>
        <br />
        <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>&larr; Quay lại</button>
      </main>
    </>
  );
};

export default CourseDetail;
