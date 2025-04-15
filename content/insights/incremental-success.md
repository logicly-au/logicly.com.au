---
title: "Avoid biting off more than you can chew: start small and scale up"
description: "Learn about the value of a flexible, incremental approach to large-scale projectsto achieve successful outcomes."
summary: "Lessons from the Government’s failed $2.8bn business registers project"
author: Adam Clarke
jobtitle: Director/Senior Consultant/CTO
date: 15 July 2024
img: incremental-success.jpeg
alt: Woman and man looking at tablet
imgheader: incremental-success.jpeg
link: /insights/incremental-success
categories:
  - Public Sector
  - Digital transformation
---

<div class="grid grid-cols-12">

<div class="col-span-12 lg:col-span-3 blog-sidebar">
<div class="mt-2 blog-sidebar-author">

Adam Clarke

<time datetime="2024-07-15">15 July 2024</time>

</div>
<div class="grid grid-cols-4">
<!---Remove 'hidden' from div below to show social media icons--->
<div class="grid hidden grid-cols-5 col-span-3 lg:col-span-4 blog-social-media justify-items-start lg:justify-items-center">
<div class="col-span-1">
Share
</div>

<div class="col-span-1">
<img class="h-4" src="/Facebook.svg" alt="Facebook logo" />
</div>

<div class="col-span-1">
<img class="h-4" src="/Twitter.svg" alt="Twitter logo" />
</div>

<div class="col-span-1">
<img class="h-4" src="/Linkedin.svg" alt="Linkedin logo" />
</div>

<div class="col-span-1">
<a href="mailto:info@logicly.com.au">
<img class="h-4" src="/Email.svg" alt="Email icon" />
</a>
</div>

</div>
</div>
</div>


<div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-6 blog-text">
<div>

The Australian government's business super-registry would have been the biggest gov-tech project ever, aiming to consolidate 30 Australian Securities and Investments Commission registers with the Australian Business Register and revolutionising business registration in Australia. After four years of spiralling costs, it’s been dumped.

Former NSW Government executive Damon Rees conducted an <a href="https://treasury.gov.au/sites/default/files/2023-08/review-modernising-business-registers-program-report-redacted_0.pdf">independent review</a> of the failed project. He found that the project would likely cost up to five times more than initially estimated and would take five more years to deliver major benefits.

Merging over 30 business registries, each with distinct legislative histories and technologies, was an ambitious goal. As Mr Rees noted this goal is made even more difficult in government, which is <a href="https://www.afr.com/politics/federal/lessons-from-axed-2-8b-business-register-project-20230831-p5e0ui">“an inherently complex environment that is arguably more challenging than almost any private sector organisation operating in Australia would face.”</a> 

It’s easy to underestimate the full complexity of such a transformation at the macro level, but the bigger the project the more ideas and problems the decision-makers, technical team and other stakeholders need to hold in mind over time. Taking an incremental, progressive approach allows you to start sooner with a product that adds value and incrementally improve and enhance it over time. Below we explore the lessons Mr Rees drew from the failed project and how taking an incremental approach helps to deliver successful large-scale projects.

## Avoid large transformation projects
The review highlighted the perils of oversized transformations, particularly in complex government environments. The initial goal to revolutionise business registration in Australia faced unprecedented challenges, ballooning costs and extended timelines.

This is typical of large-scale IT projects. They require immense resources - money, people, and attention - over a long period of time and this is difficult to sustain in organisations with many competing priorities. The task of coordinating the business and technical teams that need to be involved simultaneously and gaining support from multiple stakeholders whose priorities and requirements change over time can slow momentum and create bottlenecks. 

It’s difficult to accurately assess what’s required to implement large-scale projects too. The complexity of projects that include multiple teams, environments and priorities makes quantifying the work involved a series of educated guesses. A common reason for the failure of large projects is ‘the gap between “what it takes” and “what is given”’, that is, the amount of funding, time and people required versus what is allocated.

## Plan for small changes that independently add value
Delivering quick wins creates momentum and buy-in from the stakeholders that can make or break a project. The best IT projects are those that are formed from the feedback of end users who are engaged and enthusiastic about the possibilities, and delivering small but rapid improvements is the best way to get them on board. 

Slow delivery can break a project; if your user base is waiting too long for a product and you can’t demonstrate its value, they’ll go and solve the problem themselves some other way. This can lead to a proliferation of unrestrained back office processes that are difficult to control, but worse than that is the damage it does to the relationship between the project owners and the users, as they become frustrated with your efforts and lose trust that you can deliver.

## Start small and scale gradually
Breaking large-scale projects into manageable sizes, especially in settings like the government sector where multiple stakeholders and regulatory intricacies add complexity, means the team can focus on a small number of inputs. This is much easier to manage: technical teams can be smaller, less stakeholders need to be involved, and the intended outcome is easily understood by everyone involved.

More importantly, functionality can be quickly developed and tested in real world settings. You can roll out the “minimum lovable product” to a key user group quickly - the product that delivers an improvement and demonstrates the potential value - and scale without taking large risks. 

![Iterative and incremental approach is agile, responsive and addresses issues as they occur](/Choosing-between-iterative-incremental.png)

## Rebuild or renovate?
Sometimes the most pragmatic approach to a large-scale project is to rethink the plan altogether. 

For essential systems that are mostly fit-for-purpose but somewhat outdated, a renovation of the existing system can be the most efficient way to implement a large transformation project. The Review into the business registers project ultimately recommended this as the preferred option: “revert to the pre-MBR Program operating model for registry services and undertake an additional targeted investment…in uplifting data integrity and quality”. 

This approach works. In a recent example, we’ve been “renovating” a system we first developed almost 15 years ago over the past five years by tackling it in pieces. The <a href="https://www.validator.com.au/">Online Validator</a> is a tool for automating the validation process of multiple National Minimum Data Sets on behalf of the Department of Health and Aged Care. We embarked on a significant project renovating the tool to:
<div class="blog-text-list">
<ul>
  <li>accommodate workflow changes,</li>
  <li>enhance security against increasing data security risks,</li>
  <li>replace third party software components that are no longer maintained, and</li>
  <li>leverage technological improvements for efficiency.</li>
</ul>
</div>

Rather than tackle all of this at once, we identified the priorities and broke the tasks into small pieces. This allowed us to keep the project team small, bringing in only the required resources and staying focussed on the next deliverable. First the security of the authentication process was improved, then the underlying database was made more efficient. The hosting infrastructure was modernised and now the user interface is being redesigned and redeveloped. During all of this, the application has been available and meeting the needs of the users, but importantly the long history of the project and the small improvements which have made it user friendly over time, which no longer exists in people's memory or even in some cases systems documentation, has been retained and included in the redesign. 

These small but important details can be easily lost in planning a new project and can damage the relationship with users. Just ask <a href="https://www.forbes.com/sites/paullamkin/2024/07/26/sonos-says-sorry-for-app-update-issues/">Sonos</a>, who even considered reverting to the previous version of their mobile app after numerous complaints from users frustrated that the new app was missing features they’d been using for years. It turned out that reverting wasn’t feasible, a situation that the renovation approach would have avoided.

## Maintain legacy systems
A crucial takeaway from the failure of the business registers project is the need to continually invest in and update legacy systems. It’s not flash, and it can seem expensive, but investing in the maintenance of existing applications gives you the flexibility to change the approach as needed and will prevent a lot of pain in the long-term. 

It’s tempting to reduce that investment when planning to replace the system, but as both the business registers project and Sonos’ beleaguered new app demonstrates, this can lead organisations into a catch-22 situation where the available system is no longer fit-for-purpose but the new system isn’t operational.

## Designing an engineering process that fits
Taking an incremental approach to tackling big projects doesn’t just help deliver project success, it also makes things easier for the people involved.

<div class="blog-text-list">
<ol>
  <li><strong>Manageable expectations:</strong> Breaking down large projects into smaller, manageable chunks helps stakeholders understand the scope and goals of each phase, setting  realistic expectations and avoiding disappointment.</li>
  <p>
  <li><strong>Reduced risk of burnout:</strong> Focusing on one small part of the project at a time reduces the likelihood of team members feeling overwhelmed, maintaining morale and productivity.</li>
  <p>
  <li><strong>Continuous feedback and learning:</strong> The iterative approach allows for ongoing feedback and adjustments based on real-world data and user input, ensuring the final product is of high quality and meets user needs.</li>
  <p>
</ol>
</div>

## How we deliver digital transformation incrementally

### Case study: The Queensland Department of Transport and Main Roads Online Travel Survey
The Queensland Department of Transport and Main Roads (TMR) needed to shift from paper-based to digital surveys to gather vital data more efficiently and accurately. They aimed for a system that was not only more user-friendly but also encouraged higher participation rates.

### Approach and Execution
We adopted an iterative and incremental approach to develop the digital survey system:
<div class="blog-text-list">
<ul>
  <li><strong>Initial phase:</strong> We began by creating a basic online survey prototype, testing it, and gathering initial feedback to guide improvements.</li>
  <p>
  <li><strong>Real-world application:</strong> The survey was then deployed at three university campuses, providing insights for further refinement.</li>
  <p><li><strong>Targeted modifications:</strong> Based on these insights, we adjusted the survey design specifically for household data collection, enhancing its relevance and ease of use.</li>
  <p><li><strong>Administrative interface:</strong> The final phase involved developing a backend system for survey administrators, focusing on ease of data management and participant support.</li>
</ul>
</div>

### Outcomes
This flexible, evolving iterative and incremental development process led to the successful digital transformation of TMR's survey system, exceeding expectations:
<div class="blog-text-list">
<ul>
  <li>The survey is now predominantly online, with ongoing updates improving the user experience.</li>
  <li>The system's intuitive design and mobile/desktop compatibility significantly increased both accuracy and participation rates.</li>
  </ul>
</div>

By breaking down the project into manageable stages and incorporating user feedback at each step, we delivered a solution that effectively meets TMR's needs. This project is a great example of the effectiveness of a pragmatic combination of iterative and incremental approaches to tackle complex information challenges.

## Would you like to discuss a flexible, incremental approach for your next project?
<NuxtLink to="/contactus">Get in touch</NuxtLink> to book a complimentary, no-obligation 60-minute consultation to discuss potential solutions. Tell us about your complex information challenge, and we’ll suggest possible scenarios for flexible project delivery.

</div>
</div>

</div>
