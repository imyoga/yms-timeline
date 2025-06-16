import { UiKit } from "../components/UIKit";
import { PageWrapper } from "./PageWrapper";

/**
 * UI page component that showcases theme system and UI components
 *
 * @returns {JSX.Element} UI component
 * @example
 * <UI />
 */
export const UiKitPage = () => {
  return (
    <PageWrapper>
      <UiKit />
    </PageWrapper>
  );
};
