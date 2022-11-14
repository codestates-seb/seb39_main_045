FROM adoptopenjdk/openjdk11

COPY build/libs/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar

ENV PROFILE prod

ENTRYPOINT ["java", "-Dspring.profiles.active=${PROFILE}", "-jar","/server-0.0.1-SNAPSHOT.jar"]