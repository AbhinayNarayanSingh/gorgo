import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
    { file: null, url: null },
    { file: null, url: null },
    { file: null, url: null },

    { file: null, url: null },
    { file: null, url: null },
    { file: null, url: null },
  ]);

  useEffect(() => {
    setError("");
  }, [title, subTitle, category, tags, content]);

  const submitHandler = async () => {
    let fileUrls = [];
    for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
      if (files[fileIndex]["file"]) {
        let url = await UploadImage(files[fileIndex]["file"]);
        fileUrls.push(url);
      } else if (files[fileIndex]["url"]) {
        fileUrls.push(files[fileIndex]["url"]);
      }
    }

    if (fileUrls.length === 0) {
      return alert("Image Arr is empty");
    } else if (title === "") {
      return setError("title");
    } else if (subTitle === "") {
      return setError("subTitle");
    } else if (category === "") {
      return setError("category");
    } else if (content === "") {
      return setError("content");
    } else if (tags.length <= 5) {
      return setError("tags");
    }

    const formData = {
      title: title,
      subtitle: subTitle,
      category: category,
      banners: fileUrls,
      content: content,
      tags: tags,
    };

    dispatch(blogPostPOSTAction(formData));
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
                    <div className="col-md-3 col-xl-2 col-4" key={index}>
                      <FileInput
                        id={`file-${index}`}
                        index={index}
                        value={files}
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
              <button
                className="btn-primary"
                onClick={async () => submitHandler()}
              >
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
