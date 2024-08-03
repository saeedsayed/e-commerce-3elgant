import PropTypes from 'prop-types';

/**
 * SignPageLayout component is a reusable layout component for sign up and sign in pages.
 * It includes a split screen layout with an image on one side and a form on the other.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The form or content to be displayed on the right side of the layout.
 * @param {string} props.imgSrc - The source URL of the image to be displayed on the left side.
 * @param {string} props.imgAlt - The alt text for the image.
 * @param {string} props.title - The title text to be displayed above the image.
 */

const SignPageLayout = ({ children, imgSrc, imgAlt, title }) => (
  <div className="flex w-screen h-screen flex-col md:flex-row overflow-x-hidden md:overflow-hidden">
    {/* Left side with image and title */}
    <div className="md:w-1/2 md:h-full bg-primary flex flex-col items-center justify-between w-full h-[430px] relative">
      <h1 className="pt-6 leading-6 text-[24px] absolute">
        {title}
        <span className="text-sub-text">.</span>
      </h1>
      <div className="flex-1 flex items-center justify-center font-medium w-[375px] h-[430px] md:w-full md:h-[1080px] 2xl:w-[736px]">
        <img src={imgSrc} alt={imgAlt} className="md:w-full md:h-full" />
      </div>
    </div>
    {/* Right side with children content (form) */}
    <div className="md:w-1/2 w-full h-[1028px] md:flex relative">
      <div className="w-full h-[598px] p-[40px] flex flex-col gap-8 items-start overflow-hidden md:w-[456px] md:h-[535px] md:absolute md:top-[220px] md:left-[5%] lg:left-[13%]">
        {children}
      </div>
    </div>
  </div>
);

SignPageLayout.propTypes = {
  children: PropTypes.node.isRequired, // The content to be rendered on the right side (usually a form).
  imgSrc: PropTypes.string.isRequired, // Source URL for the image.
  imgAlt: PropTypes.string.isRequired, // Alt text for the image.
  title: PropTypes.string.isRequired, // Title text to be displayed above the image.
};

export default SignPageLayout;
