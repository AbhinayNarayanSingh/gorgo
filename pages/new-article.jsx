import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import Select from "../components/Select";
import FileInput from "../components/FileInput";
import TagInput from "../components/TagInput";

// action

import { blogPostPOSTAction } from "../redux/actions/blogPostAction";
import { UploadImage } from "../utils/request";

const NewArticle = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([
    { id: 0, file: null },
    { id: 1, file: null },
    { id: 2, file: null },
    { id: 3, file: null },
    { id: 4, file: null },
    { id: 5, file: null },
  ]);

  useEffect(() => {
    setError("");
  }, [title, subTitle, category, tags, content]);

  const submitHandler = () => {
    // if (ImageArr.length === 0) {
    //   return setError("ImageArr");
    // } else if (title === "") {
    //   return setError("title");
    // } else if (subTitle === "") {
    //   return setError("subTitle");
    // } else if (category === "") {
    //   return setError("category");
    // } else if (content === "") {
    //   return setError("content");
    // } else if (tags.length === 0) {
    //   return setError("tags");
    // }

    const imageUploadFn = () => {
      const ImageArr = [];

      files.map((item) => {
        if (item["file"] !== null) {
          UploadImage(item["file"]).then((res) => ImageArr.push(res));
        }
      });

      return ImageArr;
    };
    // dispatch(
    //   blogPostPOSTAction({ ImageArr, title, category, subTitle, content, tags })
    // );

    console.log(files);
    console.log(ImageArr);
  };

  return (
    <>
      <Navigation />
      <div className="container-fluid " style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container editor-text-container">
          <div className="row justify-content-center ">
            <div className="col-md-8 editor col-12">
              <h2>Add New Article</h2>
              <div className="row">
                {files.map((item, index) => {
                  return (
                    <div className="col-md-3 col-xl-2 col-4">
                      <FileInput
                        id={index}
                        index={index}
                        value={files[index]["file"]}
                        setValue={setFiles}
                      />
                    </div>
                  );
                })}
              </div>

              <Textarea
                label="Title"
                value={title}
                setValue={setTitle}
                error={error === "title" ? true : false}
                placeholder="Article Title"
              />
              <Input
                label="Sub Title"
                value={subTitle}
                setValue={setSubTitle}
                error={error === "subTitle" ? true : false}
                placeholder="Article Sub-title"
              />
              <Select
                label={"Category"}
                id={"Category"}
                option={["Business", "Entertainment"]}
                value={category}
                setValue={setCategory}
                error={error === "category" ? true : false}
              />
              <TextEditor
                value={content}
                setValue={setContent}
                error={error === "content" ? true : false}
              />

              <TagInput
                label="Tags"
                value={tags}
                setValue={setTags}
                error={error === "tags" ? true : false}
                placeholder="Article Tags"
              />
              <button className="btn-primary" onClick={() => submitHandler()}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewArticle;
