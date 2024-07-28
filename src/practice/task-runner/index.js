// Function to create an API limiter
function TaskRunner(count) {
  this.requestQueue = []; // Queue to store pending requests
  this.currentTasks = 0; // Number of currently active requests
  this.maxReq = count;
}

TaskRunner.prototype.push = function (url) {
  // Function to process the request queue
  const schedule = async (currUrl) => {
    try {
      const response = await fetch(currUrl);
      const data = await response.json();
    } catch (error) {
      console.log("error");
    } finally {
      if (this.requestQueue.length) {
        const queuedUrl = this.requestQueue.shift();
        schedule(queuedUrl);
      }
    }
  };

  if (this.currentTasks < this.maxReq) {
    this.currentTasks++;
    schedule(url);
  } else {
    this.requestQueue.push(url);
  }
};

const taskInstance = new TaskRunner(2);

taskInstance.push("https://jsonplaceholder.typicode.com/posts");
taskInstance.push("https://jsonplaceholder.typicode.com/comments");
taskInstance.push("https://jsonplaceholder.typicode.com/albums");
taskInstance.push("https://jsonplaceholder.typicode.com/todos");
taskInstance.push("https://jsonplaceholder.typicode.com/users");
