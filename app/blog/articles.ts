import { legacyBlogPosts, type BlogPost } from './legacyPosts';

const author = { name: 'Hiriq', avatar: '/Logo.png', type: 'Organization' as const };

const newPosts: BlogPost[] = [
  {
    slug: 'ai-ats-buyers-checklist',
    title: 'How to Choose an AI ATS: A Practical Buyer Checklist',
    excerpt: 'Evaluate AI applicant tracking software with a role-based demo, screening evidence, recruiter controls, and a measurable pilot before committing.',
    category: 'Best Practices', date: '2026-09-07', readTime: '4 min read',
    image: '/product/product-pipeline.webp', author,
    keywords: ['AI ATS', 'AI applicant tracking system', 'ATS buyer checklist'],
    content: {
      intro: 'An AI ATS should help your team move from applications to a defensible shortlist. The right choice depends on where work stalls: reviewing resumes, collecting missing information, interviewing, or handing evidence to hiring managers. Start with that bottleneck, then test whether the product resolves it with a real role.',
      sections: [
        { heading: 'Bring one role and a small test set', content: 'Give each vendor the same role criteria and anonymized or synthetic resumes. Include a clear match, a candidate with transferable experience, an incomplete application, and someone missing a genuine requirement. Ask to see the workflow from intake through recruiter review, including how an incorrect recommendation is corrected.', bulletPoints: ['Separate mandatory requirements from preferences before running the demo.', 'Ask where each match claim came from in the resume or interview.', 'Check how missing information differs from a confirmed mismatch.', 'Have the person who will use the system complete the review task.'] },
        { heading: 'Evaluate the screening and interview stages separately', content: 'Applicant tracking, resume screening, pre-screening, and an AI interview solve different problems. Tracking organizes the pipeline. Resume screening surfaces documented experience. Pre-screening collects practical qualification details. A conversational interview explores role knowledge through questions and follow-ups. A product may cover some or all of these stages; ask the vendor to demonstrate each capability you need.', links: [{label: 'Explore Hiriq AI ATS workflows', href: '/solutions/ai-ats'}, {label: 'Compare the pre-screening stage', href: '/solutions/candidate-pre-screening-software'}] },
        { heading: 'Ask what happens after the score', content: 'A summary only saves time if the reviewer can inspect its supporting evidence. Look for role criteria, topic scores, question-level detail, transcripts, and a clear way for a recruiter to decide the next step. During the demo, choose a disputed answer and trace it through the report. Ask about access controls, retention, data exports, integrations, and any limits in the plan being quoted; do not infer these from a general AI label.' },
        { heading: 'Set a pilot acceptance rule', content: 'Measure minutes spent per reviewed candidate, time waiting between stages, candidate completion, and how often reviewers overturn recommendations. Compare similar roles and applicant volumes. An illustrative target might be less reviewer time without lower completion or more disputed decisions; set the actual threshold with your hiring team. Include setup and training effort in the cost calculation.' },
        { heading: 'Where Hiriq fits', content: 'Hiriq brings resume screening, separate candidate pre-screening, live adaptive AI interviews, and recruiter review into an early hiring workflow. Its interview reports provide topic scores, answer ratings, transcripts, and integrity flags for review. Use a demo to assess that evidence against your own role requirements and confirm plan coverage before purchase.', links: [{label: 'See the hiring platform', href: '/hiring-platform'}, {label: 'Review plans', href: '/pricing'}] }
      ]
    }
  },
  {
    slug: 'ai-resume-screening-vs-keyword-filtering',
    title: 'AI Resume Screening vs. Keyword Filtering: What to Test',
    excerpt: 'Learn how to evaluate CV screening beyond keyword matches, handle missing evidence, and build a shortlist recruiters can explain.',
    category: 'Recruiting Tips', date: '2026-09-07', readTime: '4 min read',
    image: '/product/product-pipeline.webp', author,
    keywords: ['AI resume screening', 'CV screening software', 'resume keyword filtering'],
    content: {
      intro: 'Keyword filtering checks whether selected terms appear in a resume. AI resume screening can interpret experience in relation to role criteria, but an AI label does not prove that interpretation is accurate. The useful question is whether a recruiter can understand, verify, and correct the evidence behind the shortlist.',
      sections: [
        { heading: 'Start with evidence, not a longer keyword list', content: 'For a backend engineering role, a resume that mentions PostgreSQL once may contain stronger evidence than one that repeats the term. A project description explaining database design, query optimization, and production responsibilities gives a reviewer more context. Define the work the candidate needs to perform, then ask the screening tool to surface relevant examples. Confirm the explanation against the original text.' },
        { heading: 'Distinguish absent evidence from a failed requirement', content: 'A resume may omit shift availability, notice period, or a qualification date. That does not establish a negative answer. Route unanswered practical questions into pre-screening. Reserve a mismatch label for evidence that actually conflicts with a requirement, and let recruiters inspect exceptions rather than treating an aggregate score as the entire decision.', bulletPoints: ['Document why each mandatory criterion is necessary for the role.', 'Keep experience requirements distinct from preferred tools.', 'Review candidates with equivalent or transferable experience.', 'Use follow-up questions to resolve incomplete information.'], links: [{label: 'See candidate pre-screening', href: '/solutions/candidate-pre-screening-software'}] },
        { heading: 'Run a controlled comparison', content: 'Prepare pairs of synthetic resumes with equivalent experience expressed in different words. Add a resume that lists tools without examples, and one that describes relevant work without the exact job title. Compare the outputs with a human review using the same rubric. Repeat with your normal document formats to check extraction errors. Keep the sample small enough to inspect every explanation before expanding the pilot.' },
        { heading: 'Track review effort and missed candidates', content: 'Count the time spent checking suggested matches and reviewing exceptions. Sample lower-ranked applications to see whether qualified candidates are being missed. Record the reason for each correction: extraction, criteria interpretation, missing context, or recruiter disagreement. This tells you whether to change the job criteria, improve intake questions, or reconsider the screening workflow.' },
        { heading: 'Use screening to prepare the next conversation', content: 'Hiriq surfaces role-relevant resume information for recruiter review and supports a separate pre-screening stage before deeper AI interviews. The value is a clearer starting point: recruiters can focus on unresolved questions and interview evidence instead of repeatedly searching documents. The screening result remains part of the evidence, with final hiring decisions held by the team.', links: [{label: 'Explore AI resume screening', href: '/solutions/ai-resume-screening'}, {label: 'Read the AI ATS buyer checklist', href: '/blog/ai-ats-buyers-checklist'}] }
      ]
    }
  },
  {
    slug: 'live-ai-interviews-vs-one-way-video',
    title: 'Live AI Interviews vs. One-Way Video Interviews',
    excerpt: 'Compare adaptive conversations with recorded video questions, including follow-ups, interview scorecards, transcripts, and recruiter review.',
    category: 'Industry Trends', date: '2026-09-07', readTime: '4 min read',
    image: '/product/product-ai-scorecard.webp', author,
    keywords: ['live AI interviews', 'conversational AI interview platform', 'one-way video interviews'],
    content: {
      intro: 'A one-way video interview collects recorded answers to predefined prompts. A live conversational AI interview asks questions in real time and can follow up on the answer it receives. Both can collect evidence before a recruiter meeting. The choice depends on whether fixed responses are enough or whether the role requires deeper probing.',
      sections: [
        { heading: 'What an adaptive follow-up adds', content: 'Imagine asking a software candidate how they handled a production incident. The first answer says they restarted a service. A follow-up can ask what evidence identified the fault, what alternatives they considered, and how they checked recovery. That sequence can expose the difference between naming an action and explaining sound reasoning. The follow-up should stay tied to the role criteria rather than wander into unrelated personal topics.' },
        { heading: 'Consistency comes from the rubric', content: 'An adaptive interview does not need identical wording on every turn, but it does need comparable competencies and clear scoring criteria. Ask a vendor how it covers required topics, handles short answers, and distinguishes weak evidence from an unasked question. Review a strong answer, a partial answer, and an interrupted session in the demo before judging the final score.' },
        { heading: 'What recruiters should receive', content: 'A recommendation should be the start of review. Ask for the transcript and enough detail to connect an assessment to a specific response. Hiriq supports live interviews of around 30 minutes with industry-focused technical and scenario questions, adaptive follow-ups, subtopic scores, and per-turn answer ratings.', bulletPoints: ['Read the summary to locate strengths and unresolved topics.', 'Inspect the relevant question and answer before accepting a score.', 'Review integrity flags in context; a flag alone does not establish cheating.', 'Choose the next step using the role requirements and human judgment.'], links: [{label: 'Explore the AI interview platform', href: '/solutions/ai-interview-platform'}] },
        { heading: 'Keep candidate experience in the evaluation', content: 'Tell candidates what format to expect, how long the session takes, and how to get support. Ask the vendor to demonstrate interruption handling and available accommodations. A completion rate matters alongside reviewer time: a workflow that saves internal effort but loses suitable applicants may not improve hiring. Confirm the product behavior you need during procurement.' },
        { heading: 'Keep pre-screening in the flow', content: 'A detailed interview is not a substitute for practical qualification. Confirm availability and required background in pre-screening first, then use the AI interview for deeper role evidence. This avoids asking every applicant to complete a long session before basic fit is understood and lets recruiters spend their live conversations on issues that need human follow-up.', links: [{label: 'See the separate pre-screening workflow', href: '/solutions/candidate-pre-screening-software'}, {label: 'View Hiriq AI interviews', href: '/automated-interviews'}] }
      ]
    }
  },
  {
    slug: 'healthcare-candidate-pre-screening-checklist',
    title: 'Healthcare Candidate Pre-Screening: A Recruiter Checklist',
    excerpt: 'Separate practical nurse qualification questions from clinical interview evidence, with a clear handoff for credential verification and recruiter review.',
    category: 'Recruiting Tips', date: '2026-09-07', readTime: '4 min read',
    image: '/product/product-prescreening-result.webp', author,
    keywords: ['healthcare candidate screening', 'nurse pre-screening', 'healthcare staffing software'],
    content: {
      intro: 'Healthcare pre-screening helps recruiters collect practical role information before a detailed interview. It should make unanswered questions visible and prepare the next review step. A candidate stating that a credential is current is useful intake information; it is not independent verification of that credential.',
      sections: [
        { heading: 'Translate the vacancy into qualification questions', content: 'Use the actual unit, responsibilities, working pattern, and approved requirements for the vacancy. An ICU role and an outpatient role may require different experience. Ask hiring managers which criteria are mandatory and which can be addressed through training, then use that distinction consistently.', bulletPoints: ['Which relevant units or patient populations have you worked with?', 'What credentials do you hold for the role, and what dates need checking?', 'Which of the stated shifts can you work?', 'What is your earliest available start date?', 'Which required responsibilities have you performed recently?'] },
        { heading: 'Separate self-report from verification', content: 'Record the candidate answer and identify anything the recruiter must verify through the employer\'s credentialing process. Do not convert a transcript into an assertion that a license has been authenticated. Missing details should remain visible as follow-up items. A useful report lets a reviewer distinguish an answer received, a criterion provisionally met, and an independently completed check.' },
        { heading: 'Reserve clinical depth for the interview', content: 'Pre-screening can establish whether an applicant has relevant experience. A deeper interview can explore how they explain situations, escalation, and role-specific reasoning. Define those topics with qualified hiring stakeholders. Hiriq separates practical pre-screening from adaptive AI interviews, where follow-ups can probe an incomplete answer and reports organize evidence by topic.', links: [{label: 'Explore healthcare staffing workflows', href: '/solutions/healthcare-staffing-agencies'}, {label: 'Compare live AI interview formats', href: '/blog/live-ai-interviews-vs-one-way-video'}] },
        { heading: 'Build a useful recruiter handoff', content: 'Give the reviewer the original responses, outstanding checks, relevant interview topics, and the next action owner. Avoid repeating the entire resume in the handoff. For example, a short summary can identify that shift availability is confirmed by the candidate, a credential date still needs verification, and one experience area needs a deeper interview. The reviewer can then act without reconstructing the conversation.' },
        { heading: 'Measure the workflow before expanding it', content: 'Pilot one role with the recruiting and hiring teams. Track time spent collecting missing details, completion rates, questions requiring clarification, and the quality of the handoff. Hiriq\'s pre-screening result view is designed to bring responses and outstanding topics into recruiter review. Use your own requirements in a demo to assess that workflow; credentialing and final selection remain responsibilities of the hiring organization.', links: [{label: 'View candidate pre-screening software', href: '/solutions/candidate-pre-screening-software'}, {label: 'See the hiring platform', href: '/hiring-platform'}] }
      ]
    }
  },
  {
    slug: 'high-volume-hiring-automation-playbook',
    title: 'High-Volume Hiring Automation: From Intake to Shortlist',
    excerpt: 'Build a measurable hiring workflow across resume screening, pre-screening, AI interviews, and recruiter review for teams working across time zones.',
    category: 'Best Practices', date: '2026-09-07', readTime: '4 min read',
    image: '/product/product-dashboard.webp', author,
    keywords: ['high-volume hiring automation', 'recruiting automation software', 'automated candidate screening'],
    content: {
      intro: 'In high-volume hiring, the bottleneck often moves. Clearing a resume backlog can create an interview backlog; completing interviews can create a manager-review backlog. Automate with a defined owner and next step at every stage so more applications do not simply create a larger queue elsewhere.',
      sections: [
        { heading: 'Map waiting time before choosing automation', content: 'Take a recent vacancy and record when applications arrived, when qualification finished, when interviews completed, and when reviewers acted. Separate time spent working from time spent waiting. Use median and slower-case timings to avoid hiding stalled candidates inside an average. The longest avoidable wait gives you a more useful starting point than the stage with the most visible activity.' },
        { heading: 'Give each stage one purpose', content: 'Keep the handoffs explicit. Resume screening gathers documented background. Pre-screening resolves practical qualification questions. AI interviews collect deeper role evidence. Recruiter review decides what to do with the combined record. Hiriq supports these stages in one early hiring workflow, including transcripts and scorecards after adaptive interviews.', bulletPoints: ['Intake: collect the information needed for this vacancy.', 'Resume review: identify relevant experience and missing context.', 'Pre-screening: resolve availability and practical requirements.', 'AI interview: probe technical and scenario-based reasoning.', 'Recruiter review: inspect evidence and choose the next step.'], links: [{label: 'Explore high-volume hiring', href: '/solutions/high-volume-hiring'}, {label: 'View recruiting automation software', href: '/solutions/recruiting-automation-software'}] },
        { heading: 'Define an exception queue', content: 'Decide who reviews incomplete applications, disputed scores, interrupted sessions, and candidates needing an alternative process. Set a review interval and a clear escalation owner. Automation is less useful when an exception has no destination. Sample both recommended and lower-ranked candidates during the pilot so the team can detect missed evidence before volume grows.' },
        { heading: 'Plan for USA, UK, and Middle East handoffs', content: 'Cross-region teams should specify the working time zone for each vacancy, the person receiving the handoff, and when candidates can expect a response. Confirm supported interview languages, support hours, data requirements, and any regional procurement needs with the vendor. A regional landing page or an AI label is not proof that every local requirement is covered.', links: [{label: 'Hiriq for USA and UK hiring', href: '/solutions/usa-uk-ai-hiring'}, {label: 'Hiriq for Middle East hiring', href: '/solutions/middle-east-ai-hiring'}] },
        { heading: 'Estimate savings with your own pilot data', content: 'Calculate net reviewer hours saved as candidate volume multiplied by the difference in average review minutes, divided by 60, then subtract setup and exception-handling hours. For illustration only, reducing review from 12 to 8 minutes across 150 candidates yields 10 hours before those additional costs. Pair this measure with completion, progression, and reviewer corrections; Hiriq does not promise that illustrative result for every team.', links: [{label: 'Read the AI ATS buyer checklist', href: '/blog/ai-ats-buyers-checklist'}, {label: 'Compare Hiriq plans', href: '/pricing'}] }
      ]
    }
  }
];

export const blogPosts: BlogPost[] = [...newPosts, ...legacyBlogPosts];
