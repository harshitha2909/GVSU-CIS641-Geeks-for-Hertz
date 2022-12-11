## Functional Requirements 
###  Login Page

| ID | Requirement | 
| :-------------: | :----------: | 
| FR1 |	System shall display empty login Dialog |
| FR2 |	System shall allow user to fill login details in Dialog box |
| FR3 | System shall throw error if Incorrect Credentials provided |
| FR4 |	System shall validate Correct Credentials Dialog |
| FR5 |	System shall allow user to Click on login after providing details |
  
  
###  Signup Page

| ID | Requirement | 
| :-------------: | :----------: | 
| FR6 |	System shall display Empty Signup Dialog |
| FR7 |	System shall display filled Signup Dialog |
| FR8 |	System shall validate Password and confirm password |
| FR9 |	System shall validate Password and confirm password not matching |
| FR10 | System shall allow user to Click on Signup option after providing details |
  
  

###  Patient Info Page

| ID | Requirement | 
| :-------------: | :----------: | 
| FR11 | System shall display empty patient Info Dialog |
| FR12 | System shall allow user to fill patient info dialog |
| FR13 | System shall allow user to Select appropriate options like (Sex) |
| FR14 | System shall allow user to select skip option (if all details are correct) |
| FR15 | System shall validate blood group option as per policy, provided by user as input |
  
  

###  Primary medication Page

| ID | Requirement | 
| :-------------: | :----------: |
| FR16 | System shall display empty dialog |
| FR17 | System shall allow user to enter symptoms |
| FR18 | System shall allow user to enter disease name |
| FR19 | System shall allow user to Provide either Symptoms or disease |
| FR20 | System shall display for medication results when user clicks on search |
  


###  Consultation Page

| ID | Requirement | 
| :-------------: | :----------: |
| FR21 | System shall allow user to Select New option |
| FR22 | System shall allow user to Select old option |
| FR23 | System shall Redirect to appropriate page based on option selected |
| FR24 | System shall allow user to Enter Doctor name |
| FR25 | System shall allow user to Enter specialization |
| FR26 | System shall allow user to Provid either Doctor name or specialization |
  
  

###  Scheduling appointment

| ID | Requirement | 
| :-------------: | :----------: |
| FR27 | System shall allow user to Select Yes option |
| FR28 | System shall allow user to Select No option |
| FR29 | System shall redirect to appropriate page based on option selected |
| FR30 | System shall allow user to Enter date |
| FR31 | System shall allow user to Enter time |
| FR32 | System shall Display date dialog box |
| FR33 | System shall allow to Book appointment |
  


###  Payment Page

| ID | Requirement | 
| :-------------: | :----------: |
| FR34 | System shall display Empty payment dialog page |
| FR35 | System shall display Filled payment dialog page after the user inputs details |
| FR36 | System shall Validate all details |
| FR37 | System shall Validate card details |
| FR38 | System shall Display successful payment page |
| FR39 | System shall Display failure payment page |
| FR40 | System shall allow user to click on submit option |


  
## Non-Functional Requirements

### Performance
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | System shall perform all tasks by using queuing mechanism |
| NFR2 | System shall perform multiple users at the same time |
| NFR3 | System shall load the pages as intended regardless of the traffic |
| NFR4 | Application shall execute within the execution period (< 3 Secs) |
| NFR5 | System shall retrieve data, whenever the health care provider needs it. Such as patient information, medical history |

                                                                   
### Security
  
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | System shall allow user to login only when user enters correct username and password |
| NFR7 | System shall secure personal information of user |
| NFR8 | System shall secure sensitive information (payment details) |                                                                  
| NFR9 | System shall remain resilient in the face of attacks |
| NFR10 | System shall follow HIPAA rules in safe guarding patient medical information |


### Scalability
| ID | Requirement |
| :-------------: | :----------: |
| NFR11 | System shall scale-in without performance degradation when increase in workload |
| NFR12 | System shall be scalable enough to access the highest workloads under which system will meet the performance requirements |
| NFR13 | System shall be capable enough to handle millions of requests |  
| NFR14 | System shall scale out when workload decreases without affecting system performance |
| NFR15 | System shall support predicated growth over a number of years |





# Change management plan
Every day, more and more medical apps are being developed. People are now worried about their health after the outbreak of this pandemic. In order to make informed decisions about their health, people want to know how they are doing now. Millions of lives have been affected by COVID-19 around the world. Now more than ever before, people place a high value on their health. Apps for healthcare have also been impacted by this change in focus. The need for immediate care by patients is one of our major motivators for developing this app. It is a significant problem in health care that, for various reasons, people are not always willing to take full responsibility for their own care.

Currently, many researchers are studying how "smart" technology can be developed, used, and evaluated in a broader health-care context. These studies encompass a wide range of human studies, target audiences, purposes, and technology platforms. As part of our development effort, we are developing a mobile app that can diagnose diseases, suggest basic medications, and schedule an appointment for further evaluation with a doctor. In this application, we look at how smart technologies can assist people in doing what they cannot do on their own, while also encouraging (or helping) them to do as much for themselves as possible.

Most of the people will be using either android or mac devices.This application is compatible with Android devices and as well as Mac devices. It can also be used on desktop. It is easily compatible with any device. This application is highly secured, as it is built as an react native application.

In our application we have an help tab, which is used to resolve the issues at any point of time. It can accessed at anytime while using the application. Our support team is available 24*7.

# Traceability Links
In this section we have described the relation between Software requirements and use case diagrams, activity diagrams, class diagrams which we have used for building our application.
## Use Case Diagram Traceability
| Artifact 1 | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | UCD 1.png | FR1 to FR5 |
| UseCase2 | UCD 2.png | FR16 to FR20 |
| UseCase3 | UCD 3.png | FR21 to FR33 |

## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| CD.png | NFR1 to NFR25 , FR1 to FR40 |
| 

# Software Artifacts
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/AD%20DA.png] (Activity diagram for doctor appointment)
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/AD%20pm.png] (Activity diagram for primary medication)
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/CD.png] (Class diagram of our entire project)
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/UCD%201.png] (Use case diagram of login/sign up page)
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/UCD%202.png] (Use case diagram of primary medication)
* [https://github.com/harshitha2909/GVSUCIS641Geeks-for-Hertz/blob/master/artifacts/UCD%203.png] (Use case diagram of doctor appointment)
* 
