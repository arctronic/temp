import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./upunikself/pages/landing-page";
import { WaitlistPage } from "./upunikself/pages/waitlist.page";
import { AboutUsPage } from "./upunikself/pages/about-us.page";
import { WaitlistReportPage } from "./upunikself/pages/waitlist-report.page";
import { WhatWeSellPage } from "./upunikself/pages/what-we-sell.page";
import { TermsOfUsePage } from "./upunikself/pages/terms-of-use.page";
import { PrivacyAndPolicyPage } from "./upunikself/pages/privacy-and-policy.page";
import { WorkInProgressPage } from "./upunikself/pages/work-in-progress.page";
import { ExplorePage } from "./upunikself/pages/explore.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/what-we-sell" element={<WhatWeSellPage />} />
        <Route path="/terms-and-conditions" element={<TermsOfUsePage />} />
        <Route path="/privacy-and-policy" element={<PrivacyAndPolicyPage />} />
        <Route path="/admin/dashboard" element={<WaitlistReportPage />} />
        <Route path="/in-progress" element={<WorkInProgressPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
