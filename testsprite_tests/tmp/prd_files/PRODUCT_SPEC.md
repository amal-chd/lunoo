# Lunoo: Personal Growth & Optimization Platform
## Product Specification Document (PRD)

### 1. Executive Summary
**Lunoo** is a unified personal optimization platform designed to help users manage their habits, finances, and overall well-being in a single, cohesive experience. Leveraging a "Digital Sanctum" aesthetic, it combines gamified habit tracking with sophisticated financial analysis and holistic health logging.

### 2. Core Vision
Empower users to master their daily routines, achieve financial freedom, and maintain mental/physical health through data-driven insights and a premium, distraction-free interface.

---

### 3. Key Feature Modules

#### A. Smart Habit Management
*   **Habit Tracking**: Log daily habits with custom frequency (daily, weekly, specific days).
*   **Streaks & Stats**: Visual streak counters and completion heatmaps.
*   **Habit Groups**: Categorize habits (e.g., "Morning Routine", "Work Focus").
*   **Challenges**: Join or create time-bound challenges to build discipline.

#### B. Unified Financial Suite
*   **Transaction Logging**: Manual and automated entry for income/expenses.
*   **Budgeting**: Set monthly limit goals per category (Food, Rent, Luxuries).
*   **Visual Analytics**: Spending pie charts, cash-flow line graphs, and category-wise analysis.
*   **Multiple Currencies**: Support for global currency symbols (INR, USD, EUR, etc.).

#### C. Holistic Wellness Logging
*   **Hydration (Water)**: Daily goal setting and quick-add intake logging with progress visualizations.
*   **Sleep Tracking**: Log sleep duration and quality.
*   **Focus Timer**: Pomodoro-style sessions for deep work with logged minutes.
*   **Journal & Mood**: Daily emotional check-ins and text-based journaling.

#### D. Social & Gamification
*   **Achievements**: Unlockable badges for milestones (e.g., "7 Day Streak", "Budget Master").
*   **Profile**: Custom avatars (emojis) and personalization.

---

### 4. Technical Architecture

*   **Frontend**: Flutter (Cross-platform support for Android, iOS, and Web).
*   **Authentication**: Hybrid Firebase Auth (Social: Google/Apple) + Supabase Auth.
*   **Database**: Supabase (PostgreSQL) for all user data and relational integrity.
*   **Real-Time Sync**: Supabase Realtime (PostgreSQL Changes) for instant multi-device synchronization.
*   **State Management**: Provider (Centralized `AppStore` and `AuthStore`).

---

### 5. User Experience (UX) Philosophy

*   **Aesthetics**: Minimalist, dark-centric "Sanctum" design with vibrant accent colors.
*   **Onboarding**: 
    1.  Social/Email Authentication.
    2.  Profile set-up (Name, Avatar).
    3.  Focus Area selection (Tailors the dashboard).
    4.  Initial goal setting (Budget, Water).
*   **Realtime Feedback**: Immediate UI updates via optimistic state and background sync listeners.

---

### 6. Roadmap & Future Scope
*   **AI Insights**: Personalized suggestions based on habit compliance and spending patterns.
*   **Bank Sync**: Automated transaction import (Plaid/Salt Edge integration).
*   **Social Challenges**: Compete with friends or public leagues.
*   **Widget Support**: Native iOS/Android widgets for quick logging.
*   **Apple Watch / WearOS**: Companion apps for focus and hydration.
