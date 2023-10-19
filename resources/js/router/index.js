import { createWebHistory, createRouter } from 'vue-router';

// Services
import RouteService from "../services/route-service";
import BaseService from "../services/base-service";

/* Auth */
const AdminNotFound = () => import(/* webpackChunkName: "admin-not-found" */ '../components/admin/AdminNotFound');

// Admin routes
const AdminDashboardView = () => import(/* webpackChunkName: "admin-dashboard" */ '../components/admin/AdminDashboardView');
const AdminApplicationView = () => import(/* webpackChunkName: "admin-application" */ '../components/admin/applications/AdminApplicationView');

const AdminModuleView = () => import(/* webpackChunkName: "admin-module" */ '../components/admin/modules/AdminModuleView');
const AdminModuleAssignmentView = () => import(/* webpackChunkName: "admin-module-assignment" */ '../components/admin/modules/assignments/AdminModuleAssignmentView');
const AdminModuleAssignmentSubmissionView = () => import(/* webpackChunkName: "admin-module-assignment-submission" */ '../components/admin/modules/assignments/submission/AdminModuleAssignmentSubmissionView.vue');
const AdminAssessmentQuestionView = () => import(/* webpackChunkName: "admin-assessment-question" */ '../components/admin/assessment/questions/AdminAssessmentQuestionView.vue');
const AdminAssessmentView = () => import(/* webpackChunkName: "admin-assessment" */ '../components/admin/assessment/AdminAssessmentView.vue')

const AdminCourseView = () => import(/* webpackChunkName: "admin-course" */ '../components/admin/courses/AdminCourseView')
const AdminModuleCourseView = () => import(/* webpackChunkName: "admin-module-course" */ '../components/admin/courses/AdminModuleCourseView')
const AdminCourseResourceView = () => import(/* webpackChunkName: "admin-course-resource" */ '../components/admin/courses/resources/AdminCourseResourceView.vue');

const AdminDiagnosticToolResultsView = () => import(/* webpackChunkName: "admin-diagnostic-tool-results" */ '../components/admin/diagnostic-tool/diagnostic-tool-results/AdminDiagnosticToolResultsView.vue');

// Admin Diagnostic Tool
const AdminPostDiagnosticCategoryView = () => import(/* webpackChunkName: "admin-post-diagnostic-category-view" */ '../components/admin/post-diagnostic-tool/categories/AdminPostDiagnosticCategoriesView.vue');

const AdminPostDiagnosticQuestionView = () => import(/* webpackChunkName: "admin-post-diagnostic-question-view" */ '../components/admin/post-diagnostic-tool/questions/AdminPostDiagnosticQuestionsView.vue');

const AdminPostDiagnosticOptionsView = () => import(/* webpackChunkName: "admin-post-diagnostic-options-view" */ '../components/admin/post-diagnostic-tool/questions/AdminPostDiagnosticOptionsView.vue');

const AdminPostDiagnosticUserView = () => import(/* webpackChunkName: "admin-post-diagnostic-user-view" */ '../components/admin/post-diagnostic-tool/users/AdminPostDiagnosticUsersView.vue');

// Learning routes
const LearningDashboardView = () => import(/* webpackChunkName: "learning-dashboard" */ '../components/learning/LearningDashboardView');

const LearningModuleView = () => import(/* webpackChunkName: "learning-module" */ '../components/learning/modules/LearningModuleView.vue');
const LearningModuleAssignmentView = () => import(/* webpackChunkName: "learning-module-assignment" */ '../components/learning/modules/assignments/LearningModuleAssignmentView.vue');
const LearningModuleAssessmentView = () => import(/* webpackChunkName: "learning-module-assessment" */ '../components/learning/modules/assessments/LearningModuleAssessmentView.vue')
const LearningModuleAssessmentHistoryView = () => import(/* webpackChunkName: "learning-module-assessment-history" */ '../components/learning/modules/assessments/LearningModuleAssessmentHistoryView');

const LearningPostDiagnosticToolApplicationView = () => import(/* webpackChunkName: "learning-post-diagnostic-tool-application-view" */ '../components/learning/post-diagnostic-tool/LearningPostDiagnosticToolApplicationView.vue');

const LearningCourseView = () => import(/* webpackChunkName: "learning-course" */ '../components/learning/modules/courses/LearningCourseView.vue');
const LearningCourseShow = () => import(/* webpackChunkName: "learning-course-show" */ '../components/learning/modules/courses/LearningCourseShow.vue');

const LearningAccountView = () => import(/* webpackChunkName: "learning-account" */ '../components/learning/account/LearningAccountView.vue');
const LearningSelfHelpView = () => import(/* webpackChunkName: "learning-self-help" */ '../components/learning/self-help/LearningSelfHelpView.vue');

// // main hub api
const authenticateAdmin = '/api/admin/authenticate';

/* Authenticated Component */
const routes = [

    // Admin routes
    {
        // for urls that don't exist
        name: "AdminNotFound",
        path: "/:pathMatch(.*)*",
        component: AdminNotFound,
        meta: {
            requiresAuth: false
        }
    },

    {
        name: "AdminDashboardView",
        path: "/admin/dashboard",
        component: AdminDashboardView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
        meta: {
            title: `Admin Dashboard`
        }
    },

    {
        name: "AdminApplicationView",
        path: '/admin/applications',
        component: AdminApplicationView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminModuleView",
        path: '/admin/modules',
        component: AdminModuleView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminModuleAssignmentView",
        path: '/admin/modules/:id/assignments',
        component: AdminModuleAssignmentView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminModuleAssignmentSubmissionView",
        path: '/admin/modules/:id/assignments/submissions',
        component: AdminModuleAssignmentSubmissionView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminAssessmentQuestionView",
        path: '/admin/module/:id/assessment/questions',
        component: AdminAssessmentQuestionView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminModuleCourseView",
        path: '/admin/module/:id/courses',
        component: AdminModuleCourseView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminCourseView",
        path: '/admin/courses',
        component: AdminCourseView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminCourseResourceView",
        path: '/admin/course/:id/resources',
        component: AdminCourseResourceView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminAssessmentView",
        path: '/admin/assessments',
        component: AdminAssessmentView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    // Admin Diagnostic Tool
    {
        path: '/admin/user-answer/:id',
        name: "/UserAnswers",
        component: () => import('../components/admin/useranswers/UserAnswers.vue'),
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        path: '/admin/diagnostic-questions',
        name: "/DiagnosticQuestions",
        component: () => import('../components/admin/diagnostic-tool/diagnostic-tool-questions/DiagnosticQuest.vue'),
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminDiagnosticToolResultsView",
        path: '/admin/diagnostic-tool/results',
        component: AdminDiagnosticToolResultsView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminPostDiagnosticCategoryView",
        path: '/admin/post-diagnostic-tool/categories',
        component: AdminPostDiagnosticCategoryView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminPostDiagnosticCategoryQuestionView",
        path: '/admin/post-diagnostic-tool/category/:id/questions',
        component: AdminPostDiagnosticQuestionView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminPostDiagnosticQuestionView",
        path: '/admin/post-diagnostic-tool/questions',
        component: AdminPostDiagnosticQuestionView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminPostDiagnosticOptionsView",
        path: '/admin/post-diagnostic-tool/question/:id/options',
        component: AdminPostDiagnosticOptionsView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        name: "AdminPostDiagnosticUserView",
        path: '/admin/post-diagnostic-tool/user',
        component: AdminPostDiagnosticUserView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                next,
                '/admin/login',
            )
        },
    },

    {
        path: '/admin/logout',
        name: "AdminLogout",
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                authenticateAdmin,
                localStorage.getItem('afc-admin-tk'),
                window.location.href = '/admin/login',
                '/admin/login'
            );
            // Delete token after logout
            localStorage.removeItem("afc-admin-tk");
        }
    },

    // Learning Route
    {
        name: "LearningDashboardView",
        path: "/learning/dashboard",
        component: LearningDashboardView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `LearningDashboard`
        }
    },

    {
        name: "LearningModuleView",
        path: "/learning/modules",
        component: LearningModuleView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `LearningModule`
        }
    },

    {
        path: '/learning/module/:id/courses',
        name: "LearningCourseView",
        component: LearningCourseView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `LearningModule`
        }
    },

    {
        path: '/learning/course/:id/view',
        name: "LearningCourseShow",
        component: LearningCourseShow,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `LearningModule`
        }
    },

    {
        path: '/learning/module/:id/assignment',
        name: "LearningModuleAssignmentView",
        component: LearningModuleAssignmentView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `Module Assignment`
        }
    },

    {
        path: '/learning/module/:id/assessment',
        name: "LearningModuleAssessmentView",
        component: LearningModuleAssessmentView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `Module Assignment`
        }
    },

    {
        path: '/learning/module/assessment/history',
        name: "LearningModuleAssessmentHistoryView",
        component: LearningModuleAssessmentHistoryView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `Module Assignment`
        }
    },

    {
        path: '/learning/post-diagnostic-tool/application',
        name: "LearningPostDiagnosticToolApplicationView",
        component: LearningPostDiagnosticToolApplicationView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `Module Assignment`
        }
    },

    {
        path: '/learning/Account',
        name: "LearningAccountView",
        component: LearningAccountView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `Module Assignment`
        }
    },

    {
        path: '/learning/self-help',
        name: "LearningSelfHelpView",
        component: LearningSelfHelpView,
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
        meta: {
            title: `FAQ`
        }
    },

    {
        path: '/learning/logout',
        name: "LearningLogout",
        beforeEnter: (to, from, next) => {
            RouteService.authenticateUser(
                '/learning/logout',
                localStorage.getItem('brace-learning-tk'),
                window.location.href = '/learning/login',
                '/learning/login'
            );
        }
    },

    {
        path: '/learning/assessment',
        name: "Assessment",
        component: () => import('../components/learning/assessments/LearningAssessmentView.vue')
    },

    {
        path: '/diagnostic/diagnostic-tool',
        name: "/DiagnosticTool",
        component: () => import('../components/learning/diagnosticQuestion/DiagnosticQuestion.vue'),
        meta: { disableBackNavigation: true },
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
    },

    {
        path: '/diagnostic/user-details',
        name: "/UserDetails",
        component: () => import('../components/learning/diagnosticQuestion/UserDetails.vue'),
        meta: { disableBackNavigation: true },
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
    },

    {
        path: '/diagnostic/instruction',
        name: "/Instruction",
        component: () => import('../components/learning/diagnosticQuestion/Welcomepage.vue'),
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
    },

    {
        path: '/diagnostic/multiselectques',
        name: "/mutlitselectQues",
        component: () => import('../components/learning/diagnosticQuestion/testCheck.vue'),
        meta: { disableBackNavigation: true },
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
    },

    {
        path: '/diagnostic/success-page',
        name: "/SuccessPage",
        component: () => import('../components/learning/diagnosticQuestion/SuccessPage.vue'),
        meta: { disableBackNavigation: true },
        beforeEnter: (to, from, next) => {
            BaseService.deleteCookies();
            RouteService.authenticateUser(
                '/api/learning/authenticate',
                localStorage.getItem('brace-learning-tk'),
                next,
                '/learning/login',
            )
        },
    },

    // {
    //     name: "AdminLayout",
    //     path: "/admin/account",
    //     component: AdminLayout,
    //
    //     children: [
    //         {
    //             name: "AdminLogin",
    //             path: "/admin/login",
    //             component: AdminLogin,
    //             meta: {
    //                 title: `Admin Login`
    //             }
    //         },
    //
    //         {
    //             name: "AdminDashboard",
    //             path: '/admin/dashboard',
    //             component: AdminLogin,
    //         },
    //
    //         {
    //             name: "AdminNominations",
    //             path: '/admin/nominations',
    //             component: AdminNominationList,
    //         },
    //
    //         {
    //             name: "AdminApplications",
    //             path: '/admin/applications',
    //             component: AdminApplicationList,
    //         },
    //
    //     ]
    // },

    // {
    //     path: "/",
    //     component: LearningDashboard,
    //     children: [
    //         {
    //             name: "dashboard",
    //             path: '/',
    //             component: Dashboard,
    //             meta: {
    //                 title: `Dashboard`
    //             }
    //         }
    //     ]
    // }

]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
// router.beforeEach((to, from, next) => {
//     if (to.meta.disableBackNavigation) {
//       window.history.pushState(null, null, window.location.href);
//       window.onpopstate = function () {
//         window.history.go(1);
//       };
//     }
//     next();
//   });
export default router
