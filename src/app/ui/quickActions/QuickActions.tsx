import Link from "next/link";
import { FiBookOpen, FiFileText, FiPlus, FiUpload } from "react-icons/fi";

const QuickActions = () => {
  return (
    <div className="quick-actions-panel">
      <h3 className="mb-3 text-base font-semibold">Quick Actions</h3>
      <div className="flex flex-col">
        <Link className="quick-action" href="#">
          <FiPlus aria-hidden="true" />
          <span>
            <strong>Create Lesson</strong>
            <small>Generate new lesson with AI</small>
          </span>
        </Link>
        <Link className="quick-action" href="#">
          <FiUpload aria-hidden="true" />
          <span>
            <strong>Upload Textbook</strong>
            <small>Add a new textbook</small>
          </span>
        </Link>
        <Link className="quick-action" href="#">
          <FiBookOpen aria-hidden="true" />
          <span>
            <strong>Add Resource</strong>
            <small>Add link or material</small>
          </span>
        </Link>
        <Link className="quick-action" href="#">
          <FiFileText aria-hidden="true" />
          <span>
            <strong>Create Template</strong>
            <small>Save your lesson template</small>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default QuickActions;
