# ROS 2 Workspace

This workspace contains two ROS 2 packages:

- **hello_world**: Demonstrates a basic publisher and subscriber setup using `std_msgs/String`.
- **articubot**: A custom robot project (e.g., simulation, navigation, or hardware integration).

---
## Demo 
[Youtube Link for ROS Task Demo](https://youtu.be/2IOQ54TURMk)


> Youtube link for the demo.

## 📁 Folder Structure

``` bash
ros2_ws/
  ├── src/ │
    ├── hello_world/ │
      │ └── publisher.py │
      │ └── subscriber.py │
    └── articubot/ │
      └── [robot-related files]
```
---
## 🚀 How to Run

### 1. Setup the Workspace

Make sure you are in the root of your workspace:

```bash
cd ros2_ws
```

Build the workspace:
```bash
colcon build
```
Source the setup file:
```bash
source install/setup.bash
```

## hello_world Package

This package contains two nodes:

  publisher.py: Publishes a "Hello! ROS2 is fun." message every second on the chatter topic.

  subscriber.py: Subscribes to the chatter topic and prints the received message.

🟢 Run the Publisher
```bash

ros2 run hello_world publisher
```
Expected Output:
```bash

[INFO] [my_publisher]: Published: "Hello! ROS2 is fun."
```
🔵 Run the Subscriber (in a new terminal)

Don’t forget to source the setup again in the new terminal:
```bash

source install/setup.bash
ros2 run hello_world subscriber
```
Expected Output:
```bash

[INFO] [my_subscriber]: Received: "Hello! ROS2 is fun."
```
## 🤖 articubot Package

The articubot package is your custom robot project. It includes:

  - URDF files for robot description

  - Launch files for simulation

  - Nodes for controlling or navigating the robot

  - Sensor integration and more

Example Usage (replace with your actual use case):

🔧 Build & Launch
```bash

colcon build
source install/setup.bash
ros2 launch articubot_one launch_sim.launch.py world:=src/articubot_one/worlds/obstacles.world
```

