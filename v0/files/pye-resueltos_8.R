library(ggplot2)
library(latex2exp)


########################################################################################
# TP 8 - Prueba de Hipótesis
########################################################################################


#-------------------------------------------------------------------------------------
# Definición de funciones
#-------------------------------------------------------------------------------------

# Colorea area distribución normal -> región central
dnorm_1 <- function(x, x_ci, x_cs, mean, sd) {
  y <- dnorm(x, mean = mean, sd = sd)
  y[x < x_ci | x > x_cs] <- NA
  return(y)
}

# Colorea area distribución normal -> cola izquierda
dnorm_2 <- function(x, x_ci, mean, sd) {
  y <- dnorm(x, mean = mean, sd = sd)
  y[x > x_ci] <- NA
  return(y)
}


# Colorea area distribución normal -> cola derecha
dnorm_3 <- function(x, x_cs, mean, sd) {
  y <- dnorm(x, mean = mean, sd = sd)
  y[x < x_cs] <- NA
  return(y)
}


# Gráfico P(Error tipo I) - Normal Estándar
p <- ggplot(data = data.frame(x = c(-3.5, 3.5)), aes(x)) +
  stat_function(fun    = dnorm, 
                n      = 1000, 
                args   = list(mean = 0, sd = 1), 
                size   = 1) + 
  stat_function(fun    = dnorm_2, 
                args   = list(x_c = -1.645, mean = 0, sd = 1),
                geom   = 'area', 
                fill   = 'red', 
                alpha  = 0.2) + 
  geom_vline(xintercept = -1.645, linetype = 'dotted') + 
  geom_vline(xintercept = 0, linetype = 'dotted') + 
  
  annotate('text', x = 2.5, y = 0.35, 
           label = TeX('$\\Z \\sim N(\\mu = 0, \\sigma = 1)$', output = 'character'),
           parse = TRUE) +
  annotate('text', x = 0.5, y = 0.45, 
           label = TeX('$\\mu_0 = \\mu_X$', output = 'character'),
           parse = TRUE) + 
  annotate('text', x = -0.9, y = 0, 
           label = TeX('$\\z_c = -1.645$', output = 'character'),
           parse = TRUE) +
  annotate('text', x = -3.5, y = 0.2, 
           label = 'Región\nde rechazo',
           hjust = 0,
           vjust = 1) +
  annotate('text', x = -3.5, y = 0.1, 
           label = TeX('$\\alpha = 0.05$', output = 'character'),
           parse = TRUE,
           hjust = 0,
           vjust = 1) +
  ylab('') +
  scale_y_continuous(breaks = NULL) +
  scale_x_continuous(name   = "z",
                     breaks = seq(from = -3, to = 3, by = 1),
                     limits = c(-3.5, 3.5)) +
  theme_classic()
p


# Gráfico P(Error tipo I) - Normal
p <- ggplot(data = data.frame(x = c(95, 105)), aes(x)) +
  stat_function(fun    = dnorm, 
                n      = 1000, 
                args   = list(mean = 100, sd = 1), 
                size   = 1) + 
  stat_function(fun    = dnorm_3, 
                args   = list(x_c = 102.327, mean = 100, sd = 1),
                geom   = 'area', 
                fill   = 'red', 
                alpha  = 0.2) + 
  geom_vline(xintercept = 102.327, linetype = 'dotted') + 
  geom_vline(xintercept = 100, linetype = 'dotted') + 
  annotate('text', x = 100.5, y = 0.4, 
           label = TeX('$\\bar{X} \\sim N(\\mu = 100, \\sigma = 1)$', output = 'character'),
           parse = TRUE,
           size  = 3.5,
           hjust = 0) +
  annotate('text', x = 100.1, y = 0.5, 
           label = TeX('$\\mu_0 = \\mu_X$', output = 'character'),
           parse = TRUE,
           hjust = 0) + 
  annotate('text', x = 102.5, y = 0.15, 
           label = TeX('$\\bar{x}_c = 102.327$', output = 'character'),
           parse = TRUE,
           hjust = 0,
           size = 3.5) +
  annotate('text', x = 103, y = 0.3, 
           label = 'Región\nde rechazo',
           hjust = 0,
           vjust = 1) +
  annotate('text', x = 102.5, y = 0.05, 
           label = TeX('$\\alpha(\\mu = 100) = 0.05$', output = 'character'),
           parse = TRUE,
           hjust = 0,
           vjust = 1,
           size = 3.5) +
  ylab('') +
  scale_x_continuous(name   = TeX('$\\bar{x}'),
                     breaks = seq(from = 95, to = 105, by = 1),
                     limits = c(95, 105)) +
  theme_classic()
p


# Gráfico P(Error tipo I) - Normal + 2° normal
p + stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = 99, sd = 1), 
                  size   = 1,
                  col    = 'blue') +
  geom_vline(xintercept = 99, linetype = 'dotted', col = 'blue') + 
  annotate('text', x = 95.5, y = 0.4, 
           label = TeX('$\\bar{X} \\sim N(\\mu = 99, \\sigma = 1)$', output = 'character'),
           parse = TRUE,
           size  = 3.5,
           hjust = 0) +
  annotate('text', x = 97.8, y = 0.5, 
           label = TeX('$\\mu = 99$', output = 'character'),
           parse = TRUE,
           hjust = 0) + 
  annotate('text', x = 102.5, y = 0.1, 
           label = TeX('$\\alpha(\\mu = 99) = 0.0004$', output = 'character'),
           parse = TRUE,
           hjust = 0,
           vjust = 1,
           size = 3.5)


# Gráfico P(Error tipo I) - Normal Bilateral
dnorm_e1_bilateral <- function (mean, sd, x_i, x_s, dx, x_ci, x_cs, lblpos) {
  p <- ggplot(data = data.frame(x = c(x_i, x_s)), aes(x)) +
    stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = mean, sd = sd), 
                  size   = 1) + 
    stat_function(fun    = dnorm_2, 
                  args   = list(mean = mean, sd = sd, x_ci = x_ci),
                  geom   = 'area', 
                  fill   = 'red', 
                  alpha  = 0.2) +
    stat_function(fun    = dnorm_3, 
                  args   = list(mean = mean, sd = sd, x_cs = x_cs),
                  geom   = 'area', 
                  fill   = 'red', 
                  alpha  = 0.2) +
    geom_vline(xintercept = x_ci, linetype = 'dotted') + 
    geom_vline(xintercept = x_cs, linetype = 'dotted') + 
    geom_vline(xintercept = mean, linetype = 'dotted') + 
    annotate('text', x = mean + lblpos[1], y = lblpos[2], 
             label = TeX(paste('$\\bar{X} \\sim N(\\mu = ', 
                               mean, 
                               ', \\sigma = ', sd, ')$', sep = ''),
                         output = 'character'),
             parse = TRUE,
             size  = 3.5,
             hjust = 0) +
    annotate('text', x = mean + lblpos[3], y = lblpos[4], 
             label = TeX('$\\mu_0 = \\mu_X$', output = 'character'),
             parse = TRUE,
             hjust = 0) + 
    annotate('text', x = lblpos[5], y = lblpos[6], 
             label = TeX(paste('$\\bar{x}_{ci} = ', x_ci, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    annotate('text', x = x_cs + lblpos[7], y = lblpos[8], 
             label = TeX(paste('$\\bar{x}_{cs} = ', x_cs, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    annotate('text', x = mean + lblpos[9], y = lblpos[10], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    annotate('text', x = mean + lblpos[11], y = lblpos[12], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    annotate('text', x = mean + lblpos[13], y = lblpos[14], 
             label = TeX('$\\alpha/2$', output = 'character'),
             parse = TRUE,
             hjust = 0,
             vjust = 1,
             size = 3.5) +
    annotate('text', x = mean + lblpos[15], y = lblpos[16], 
             label = TeX('$\\alpha/2$', output = 'character'),
             parse = TRUE,
             hjust = 0,
             vjust = 1,
             size = 3.5) +
    ylab('') +
    scale_x_continuous(name   = TeX('$\\bar{x}'),
                       breaks = seq(from = x_i, to = x_s, by = dx),
                       limits = c(x_i, x_s)) +
    theme_classic()
    return(p)
}


# Gráfico P(Error tipo II) - Normal Bilateral
dnorm_e2_bilateral <- function (mean, mean2, sd, x_i, x_s, dx, x_ci, x_cs, lblpos) {
  p <- ggplot(data = data.frame(x = c(x_i, x_s)), aes(x)) +
    stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = mean, sd = sd), 
                  size   = 1) + 
    stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = mean2, sd = sd), 
                  col    = 'blue',
                  size   = 1) + 
    stat_function(fun    = dnorm_1, 
                  args   = list(mean = mean2, sd = sd, x_ci = x_ci, x_cs = x_cs),
                  geom   = 'area', 
                  fill   = 'red', 
                  alpha  = 0.2) +
    geom_vline(xintercept = x_ci, linetype = 'dotted') + 
    geom_vline(xintercept = x_cs, linetype = 'dotted') + 
    geom_vline(xintercept = mean, linetype = 'dotted') +
    geom_vline(xintercept = mean2, linetype = 'dotted') +
    # Distribución H0 verdadera: lblpos 1 y 2
    annotate('text', x = mean + lblpos[1], y = lblpos[2], 
             label = TeX(paste('$\\bar{X} \\sim N(\\mu = ', 
                               mean, 
                               ', \\sigma = ', sd, ')$', sep = ''),
                         output = 'character'),
             parse = TRUE,
             size  = 3.5,
             hjust = 0) +
    # Media H0 verdadera: lblpos 3 y 4
    annotate('text', x = mean + lblpos[3], y = lblpos[4], 
             label = TeX('$\\mu_0 = \\mu_X$', output = 'character'),
             parse = TRUE,
             hjust = 0) + 
    # x_ci: lblpos 5 y 6
    annotate('text', x = mean + lblpos[5], y = lblpos[6], 
             label = TeX(paste('$\\bar{x}_{ci} = ', x_ci, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    # x_cs: lblpos 7 y 8
    annotate('text', x = x_cs + lblpos[7], y = lblpos[8], 
             label = TeX(paste('$\\bar{x}_{cs} = ', x_cs, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    # Región de rechazo: lblpos 9 y 10
    annotate('text', x = mean + lblpos[9], y = lblpos[10], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    # Región de rechazo: lblpos 11 y 12
    annotate('text', x = mean + lblpos[11], y = lblpos[12], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    # beta: lblpos 13 y 14
    annotate('text', x = mean2 + lblpos[13], y = lblpos[14], 
             label = TeX('$\\beta(\\mu_X)$', output = 'character'),
             parse = TRUE,
             hjust = 0,
             vjust = 1,
             size = 3.5) +
    # Distribución H0 falsa: lblpos 15 y 16
    annotate('text', x = mean2 + lblpos[15], y = lblpos[16], 
             label = TeX(paste('$\\bar{X} \\sim N(\\mu = ', 
                               mean2, 
                               ', \\sigma = ', sd, ')$', sep = ''),
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             vjust = 1,
             size = 3.5) +
    # Media H0 falsa: lblpos 17 y 18
    annotate('text', x = mean2 + lblpos[17], y = lblpos[18], 
             label = TeX(paste('$\\mu_0 = ', mean2, '$', sep = ''), output = 'character'),
             parse = TRUE,
             hjust = 0) +
    ylab('') +
    scale_x_continuous(name   = TeX('$\\bar{x}'),
                       breaks = seq(from = x_i, to = x_s, by = dx),
                       limits = c(x_i, x_s)) +
    theme_classic()
  return(p)
}

# Gráfico P(Decisión correcta) - Normal Bilateral
dnorm_dc1_bilateral <- function (mean, mean2, sd, x_i, x_s, dx, x_ci, x_cs, lblpos) {
  p <- ggplot(data = data.frame(x = c(x_i, x_s)), aes(x)) +
    stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = mean, sd = sd), 
                  size   = 1) + 
    stat_function(fun    = dnorm, 
                  n      = 1000, 
                  args   = list(mean = mean2, sd = sd), 
                  col    = 'blue',
                  size   = 1) + 
    stat_function(fun    = dnorm_2, 
                  args   = list(mean = mean2, sd = sd, x_ci = x_ci),
                  geom   = 'area', 
                  fill   = 'red', 
                  alpha  = 0.2) +
    stat_function(fun    = dnorm_3, 
                  args   = list(mean = mean2, sd = sd, x_cs = x_cs),
                  geom   = 'area', 
                  fill   = 'red', 
                  alpha  = 0.2) +
    geom_vline(xintercept = x_ci, linetype = 'dotted') + 
    geom_vline(xintercept = x_cs, linetype = 'dotted') + 
    geom_vline(xintercept = mean, linetype = 'dotted') +
    geom_vline(xintercept = mean2, linetype = 'dotted') +
    # Distribución H0 verdadera: lblpos 1 y 2
    annotate('text', x = mean + lblpos[1], y = lblpos[2], 
             label = TeX(paste('$\\bar{X} \\sim N(\\mu = ', 
                               mean, 
                               ', \\sigma = ', sd, ')$', sep = ''),
                         output = 'character'),
             parse = TRUE,
             size  = 3.5,
             hjust = 0) +
    # Media H0 verdadera: lblpos 3 y 4
    annotate('text', x = mean + lblpos[3], y = lblpos[4], 
             label = TeX('$\\mu_0 = \\mu_X$', output = 'character'),
             parse = TRUE,
             hjust = 0) + 
    # x_ci: lblpos 5 y 6
    annotate('text', x = mean + lblpos[5], y = lblpos[6], 
             label = TeX(paste('$\\bar{x}_{ci} = ', x_ci, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    # x_cs: lblpos 7 y 8
    annotate('text', x = x_cs + lblpos[7], y = lblpos[8], 
             label = TeX(paste('$\\bar{x}_{cs} = ', x_cs, '$', sep = ''), 
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             size = 3.5) +
    # Región de rechazo: lblpos 9 y 10
    annotate('text', x = mean + lblpos[9], y = lblpos[10], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    # Región de rechazo: lblpos 11 y 12
    annotate('text', x = mean + lblpos[11], y = lblpos[12], 
             label = 'Región\nde rechazo',
             hjust = 0,
             vjust = 1) +
    # Distribución H0 falsa: lblpos 13 y 14
    annotate('text', x = mean2 + lblpos[15], y = lblpos[16], 
             label = TeX(paste('$\\bar{X} \\sim N(\\mu = ', 
                               mean2, 
                               ', \\sigma = ', sd, ')$', sep = ''),
                         output = 'character'),
             parse = TRUE,
             hjust = 0,
             vjust = 1,
             size = 3.5) +
    # Media H0 falsa: lblpos 15 y 16
    annotate('text', x = mean2 + lblpos[17], y = lblpos[18], 
             label = TeX(paste('$\\mu_0 = ', mean2, '$', sep = ''), output = 'character'),
             parse = TRUE,
             hjust = 0) +
    ylab('') +
    scale_x_continuous(name   = TeX('$\\bar{x}'),
                       breaks = seq(from = x_i, to = x_s, by = dx),
                       limits = c(x_i, x_s)) +
    theme_classic()
  return(p)
}


#-------------------------------------------------------------------------------------
# Gráficos por ejercicio
#-------------------------------------------------------------------------------------

# E8.4 - Gráfico 1
p <- dnorm_e1_bilateral(mean = 10, 
                        sd   = 0.2 / 5, 
                        x_i  = 9.8, 
                        x_s  = 10.2, 
                        dx   = 0.05, 
                        x_ci = 9.8968, 
                        x_cs = 10.1032)
p


# E8.4 - Gráfico 2
p <- dnorm_e2_bilateral(mean   = 10,
                        mean2  = 10.1,
                        sd     = 0.2 / 5, 
                        x_i    = 9.7, 
                        x_s    = 10.4, 
                        dx     = 0.1, 
                        x_ci   = 9.8968, 
                        x_cs   = 10.1032,
                        lblpos = c(-0.29, 8, -0.089, 10.4, -0.25, 2.5, 0.01, 2.5, 
                                   -0.28, 5, 0.2, 5, -0.08, 1, 0.03, 9, 0.01, 10.4))


# E8.4 - Gráfico 3
p <- dnorm_dc1_bilateral(mean   = 10, 
                         mean2  = 10.2,
                         sd     = 0.2 / 5, 
                         x_i    = 9.7, 
                         x_s    = 10.5, 
                         dx     = 0.1, 
                         x_ci   = 9.8968, 
                         x_cs   = 10.1032,
                         lblpos = c(-0.29, 10.4, -0.1, 11.5, -0.27, 2.5, 0.01, 2.5, 
                                    -0.3, 7, 0.12, 7, 0.03, 9, 0.01, 10.4))
p
