import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  categories,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className='alert alert-danger' role='alert'>
          {errors.onSave}
        </div>
      )}
      <TextInput
        name='title'
        label='Title'
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name='authorId'
        label='Author'
        value={course.authorId || ""}
        defaultOption='Select Author'
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />
      <SelectInput
        name='categoryId'
        label='Category'
        value={course.categoryId || ""}
        defaultOption='Select Category'
        options={categories.map(category => ({
          value: category.id,
          text: category.name
        }))}
        onChange={onChange}
        error={errors.category}
      />
      {/* <TextInput
        name='category'
        label='Category'
        value={course.category}
        onChange={onChange}
        error={errors.category}
      /> */}

      <button type='submit' disabled={saving} className='btn btn-primary'>
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;
