import pygame
import sys
import numpy as np

pygame.init()

width, height = 600, 600
speed = 10

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Brownian Motion using PyGame")

font = pygame.font.SysFont("Arial", 36, bold=True)
title_text = font.render("Brownian Movement", True, (0, 0, 0))

dot_radius = 10
dot_x, dot_y = width // 2, height // 2
dot_velocity = np.array([speed, 0], dtype=float)
dot_color = (0, 0, 240)

clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    dot_x += dot_velocity[0]
    dot_y += dot_velocity[1]

    if dot_x - dot_radius < 0 or dot_x + dot_radius > width:
        dot_velocity[0] *= -1
        dot_velocity[1] = np.random.uniform(-speed, speed)
    if dot_y - dot_radius < 0 or dot_y + dot_radius > height:
        dot_velocity[1] *= -1
        dot_velocity[0] = np.random.uniform(-speed, speed)

    screen.fill((255, 255, 255))

    screen.blit(title_text, (
    (width - title_text.get_width()) // 2, 
    (height - title_text.get_height()) // 2
    ))

    pygame.draw.circle(screen, dot_color, (int(dot_x), int(dot_y)), dot_radius)

    direction = dot_velocity / np.linalg.norm(dot_velocity)  # Normalize
    end_x = int(dot_x + direction[0] * 20)
    end_y = int(dot_y + direction[1] * 20)
    pygame.draw.line(screen, (255, 0, 0), (int(dot_x), int(dot_y)), (end_x, end_y), 3)

    pygame.display.flip()
    clock.tick(60)
